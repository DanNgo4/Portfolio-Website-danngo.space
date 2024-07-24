import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import NotFoundPage from "./NotFoundPage";

import ProjectUpvote from "../../components/project-page/ProjectUpvote";
import ProjectCommentForm from "../../components/project-page/ProjectCommentForm";
import ProjectCommentsList from "../../components/project-page/ProjectCommentsList";

import useUser from "../../hooks/useUser";

import projects from "../../media/content/ProjectsAttributesList";

const ProjectPage = () => {
    const [projectInfo, setProjectInfo] = useState({ upvotes: 0, comments: [], upvoted: false });

    const { projectID } = useParams();
    const project = projects.find(project => (project.id === projectID));

    const { user, isLoading } = useUser();
    const [token, setToken] = useState(null); // Declare token to pass into child components

    useEffect(() => {
        if (project) {
            document.title = project.title;
        } else {
            document.title = "Project Not Found";
        }
    }, [project]);


    useEffect(() => {
        const loadProjectInfo = async () => {
            try {
                const authtoken = user && await user.getIdToken();
                setToken(authtoken); // Set token state
                const headers = authtoken ? { authtoken: authtoken } : {};
                const res = await axios.get(`/api/portfolio/${projectID}`, { headers });
                const newProjectInfo = res.data;
                setProjectInfo(newProjectInfo);
            } catch (e) {
                console.error("Error loading project info", e);
            }
        };

        if (!isLoading) {
            loadProjectInfo();
        }
    }, [user, isLoading, projectID]);

    if (!project) return <NotFoundPage />;

    return (
        <main className="min-h-[29vw] max-w-[70vw] md:max-w-[50vw] ml-[15vw] md:ml-[25vw] text-left">
            <h1 className="my-10 mx-4 font-bold text-4xl text-center">{project.title}</h1>

            <section className="grid grid-cols-1 md:grid-cols-2 text-center">
                <h2 className="project-info md:text-left">Type: {project.type}</h2>
                <h2 className="project-info md:text-right">{project.info}</h2>
            </section>

            <section className="flex justify-center">
                <Link to={project.url} target="_blank" className="my-10 ">
                    <button className="border-4 border-black rounded-xl text-2xl px-8 py-5 hover:bg-[#FDFDFD] duration-700">GitHub Repository</button>
                </Link>
            </section>

            <article className="my-5">
                <h2 className="mb-8 font-semibold text-xl text-center">{project.introduction}</h2>

                {project.content}
            </article>

            <article className="mt-16">
                <ProjectUpvote 
                    projectID={project.id}
                    initialUpvotes={projectInfo.upvotes}
                    initialUpvoted={projectInfo.upvoted}
                    onUpdateUpvotes={(updatedProject) => setProjectInfo(prev => ({
                        ...prev,
                        ...updatedProject
                    }))}
                    token={token}
                />

                <ProjectCommentForm 
                    projectID={project.id} 
                    callback={(updatedProject) => setProjectInfo(prev => ({
                        ...prev,
                        ...updatedProject
                    }))}
                    user={user}
                    token={token}
                />

                <ProjectCommentsList comments={projectInfo.comments} /> 
            </article>
        </main>
    );
};

export default ProjectPage;