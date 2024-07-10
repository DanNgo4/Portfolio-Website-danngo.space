import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import NotFoundPage from "./NotFoundPage";

import ProjectUpvote from "../../components/ProjectUpvote";
import ProjectCommentForm from "../../components/ProjectCommentForm";
import ProjectCommentsList from "../../components/ProjectCommentsList";

import projects from "../../media/content/ProjectsAttributesList";

const ProjectPage = () => {
    const [projectInfo, setProjectInfo] = useState({ upvotes: 0, comments: [] });
    const { projectID } = useParams();
    const project = projects.find(project => (project.id === projectID));

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
                const response = await axios.get(`/api/portfolio/${projectID}`);
                const newProjectInfo = response.data;
                setProjectInfo(newProjectInfo);
            } catch (error) {
                console.error("Error loading project info:", error);
            }
        };

        loadProjectInfo();
    }, [projectID]);

    const addNewComment = (newComment) => {
        setProjectInfo(prevInfo => ({
            ...prevInfo,
            comments: [...prevInfo.comments, newComment]
        }));
    };

    if (!project) return <NotFoundPage />;

    console.log(projectInfo.upvotes);

    return (
        <main className="min-h-[29vw] max-w-[70vw] md:max-w-[50vw] ml-[15vw] md:ml-[25vw] text-left">
            <h1 className="my-10 mx-4 font-bold text-4xl text-center">{project.title}</h1>

            <section className="grid grid-cols-1 md:grid-cols-2 text-center">
                <h2 className="font-semibold text-xl text-blue-800 col-span-1 md:text-left">Type: {project.type}</h2>
                <h2 className="font-semibold text-xl text-blue-800 col-span-1 md:text-right">{project.info}</h2>
            </section>

            <section className="flex justify-center">
                <Link to={project.url} target="_blank" className="my-10 ">
                    <button className="border-4 border-solid border-black rounded-xl text-2xl px-8 py-5 hover:bg-[#FDFDFD] duration-700">GitHub Repository</button>
                </Link>
            </section>

            <article className="my-5">
                <h2 className="mb-8 font-semibold text-xl text-center">{project.introduction}</h2>

                {project.content}
            </article>

            <article className="mt-16">
                <ProjectUpvote 
                    initialUpvotes={projectInfo.upvotes}
                    projectID={project.id} 
                />
                <ProjectCommentForm 
                    projectID={project.id} 
                    onAddComment={addNewComment}
                />
                <ProjectCommentsList comments={projectInfo.comments} /> 
            </article>
        </main>
    );
};

export default ProjectPage;