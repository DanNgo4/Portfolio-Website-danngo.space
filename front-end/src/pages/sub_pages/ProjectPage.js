import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import NotFoundPage from "./NotFoundPage";

import projects from "../../media/content/ProjectsContent";

const ProjectPage = () => {
    const {projectName} = useParams();
    const project = projects.find(project => (project.name === projectName));

    const [projectInfo, setProjectInfo] = useState({ upvotes: 0 });
    const [like, setLike] = useState(false);

    const toggleUpvote = () => {
        setLike(!like);

        if (!like) {
            projectInfo.upvotes++;
        } else {
            projectInfo.upvotes--;
        }
    }

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
        <main className="min-h-[29vw]">
            <h1 className="my-10 mx-4 font-bold text-4xl text-center">{project.title}</h1>

            <section className="flex justify-center">
                <Link to={project.url} target="_blank" className="mb-10 ">
                    <button className="border-4 border-solid border-black rounded-xl text-2xl px-8 py-5 hover:bg-[#FDFDFD] duration-700">GitHub Repository</button>
                </Link>
            </section>

            {project.content.map((paragraph, i) => (
                <p key={i} className="my-5 max-w-[50vw] text-left ml-[25vw]">{paragraph}</p>
            ))}

            <article className="flex justify-center">
                <IconButton color="default" onClick={toggleUpvote}>
                    {like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                </IconButton>

                <p className="p-2">This project has {projectInfo.upvotes} upvotes(s)</p>
            </article>
        </main>
    );
};

export default ProjectPage;