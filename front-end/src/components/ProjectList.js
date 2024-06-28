import { Link } from "react-router-dom";

import contents from "../media/content/ProjectsContent";

const ProjectList = ({projects = contents, limited = false}) => {
    if (limited) {
        return (
            <>
                {projects.filter(project => project.featured).map(project => (
                    <Link key={project.name} to={`/portfolio/${project.name}`} className="justify-self-center max-w-80 min-h-56 bg-[#F8E382] p-8 shadow-xl hover:bg-[#D3FFB3] duration-500" target="_blank">
                        <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                        <p>{project.content[0]}</p>
                    </Link>
                ))}
            </>
        );
    }
    
    return (
    <>
        {projects.map(project => (
            <Link key={project.name} to={`/portfolio/${project.name}`} className="bg-[#93DCAE] p-8 shadow-xl hover:bg-[#00ADAC] duration-500 rounded-2xl w-3/4 justify-center min-h-60 mx-auto" target="_blank">
                <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                <p>{project.content[0]}</p>
            </Link>
        ))}
    </>
    );
};

export default ProjectList;