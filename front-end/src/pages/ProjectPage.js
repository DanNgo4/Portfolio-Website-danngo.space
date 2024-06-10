import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../components/projects-content";
import NotFoundPage from "./NotFoundPage";

const ProjectPage = () => {
    const {projectName} = useParams();

    const project = projects.find(project => (project.name === projectName));

    if (!project)
    {
        return <NotFoundPage />;
    }

    return (
        <main className="min-h-[29vw]">
            <h1 className="my-10 mx-4 font-bold text-4xl text-center">{project.title}</h1>

            <Link to={project.url} target="_blank" className="mb-10 flex justify-center">
                <button className="border-4 border-solid border-black rounded-xl text-2xl px-8 py-5 hover:bg-[#fdfdfd] duration-700">GitHub Repository</button>
            </Link>

            {project.content.map((paragraph, i) => (
                <p key={i} className="my-5 max-w-[50vw] text-left ml-[25vw]">{paragraph}</p>
            ))}
        </main>
    )
};

export default ProjectPage;