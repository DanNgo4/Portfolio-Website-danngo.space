import { Link } from "react-router-dom";

import projects from "../../media/content/ProjectsAttributesList";

const ProjectList = ({
    sortDate, sortType, sortStatus,
    limited = false
}) => {
    if (limited) {  // For Home Page featured display
        return (
            <>
                {projects.filter(project => project.featured).map(project => (
                    <Link 
                        key={project.id} 
                        to={`/portfolio/${project.id}`} 
                        target="_black"
                        className="justify-self-center max-w-80 min-h-56 bg-[#F8E382] p-8 shadow-xl hover:bg-[var(--background)] duration-500"
                    >
                        <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                        <p>{project.introduction}</p>
                    </Link>
                ))}
            </>
        );
    }

    const filteredProjects = projects
        .filter(project => (sortType === "All" || project.type === sortType))
        .filter(project => (sortStatus === "All" || project.finished === (sortStatus === "true")))
        .sort((a, b) => {
            if (sortDate === "Latest") {
                return new Date(b.date) - new Date(a.date);
            } else if (sortDate === "Earliest") {
                return new Date(a.date) - new Date(b.date);
            }
            return 0;
        });
    ;

    return (
        <>
            {filteredProjects.map(project => (
                <Link 
                    key={project.id} 
                    to={`/portfolio/${project.id}`}
                    target="_blank"
                    className="bg-[var(--article-bg)] p-5 md:p-8 shadow-xl hover:bg-[#00ADAC] duration-500 rounded-2xl w-3/4 justify-center min-h-60 mx-auto flex flex-col"
                >
                    <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                    <p className="flex-grow">{project.introduction}</p>

                    <section className="grid grid-cols-2 mt-2">
                        <h4 className="font-semibold text-sm text-blue-800 col-span-1 text-left">{project.type}</h4>
                        <h4 className="font-semibold text-sm text-blue-800 col-span-1 text-right">{project.finished ? project.date : "In Progress"}</h4>
                    </section>
                </Link>
            ))}
        </>
    );
};

export default ProjectList;