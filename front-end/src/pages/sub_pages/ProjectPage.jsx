import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import ProjectUpvote from "../../components/ProjectUpvote";
import ProjectCommentForm from "../../components/ProjectCommentForm";

import projects from "../../media/content/ProjectsAttributesList";

const ProjectPage = () => {
    const {projectName} = useParams();
    const project = projects.find(project => (project.name === projectName));

    useEffect(() => {
        if (project) {
            document.title = project.title;
        } else {
            document.title = "Project Not Found";
        }
    }, [project]);

    if (!project)
    {
        return <NotFoundPage />;
    }

    return (
        <main className="min-h-[29vw] max-w-[50vw] ml-[25vw] text-left">
            <h1 className="my-10 mx-4 font-bold text-4xl text-center">{project.title}</h1>

            <section className="flex justify-center">
                <Link to={project.url} target="_blank" className="mb-10 ">
                    <button className="border-4 border-solid border-black rounded-xl text-2xl px-8 py-5 hover:bg-[#FDFDFD] duration-700">GitHub Repository</button>
                </Link>
            </section>

            <article className="my-5">
                <h2 className="mb-8 font-semibold text-xl text-center">{project.introduction}</h2>

                {project.content}
            </article>

            <article className="mt-16">
                <ProjectUpvote />
                <ProjectCommentForm />
            </article>
        </main>
    );
};

export default ProjectPage;