import { useEffect, useState } from "react";

import Divider from "@mui/material/Divider";

import Resume from "../../components/Resume";
import ProjectList from "../../components/ProjectList";

const PortfolioPage = () => {
    useEffect(() => {
        document.title = "My Projects";
    }, []);

    const [sortDate, setSortDate] = useState("Latest");
    const [sortType, setSortType] = useState("All");
    const [sortStatus, setSortStatus] = useState("All");

    return (
        <main>
            <h1 className="font-bold text-center text-4xl md:text-5xl my-10">Portfolio Gallery</h1>

            <section className="ml-4 md:ml-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16 w-[90vw] md:w-[50vw] text-center mb-10">
                <h3 className="font-bold text-xl md:text-2xl">Sort By</h3>

                <select className="port-filter-box" value={sortDate} onChange={(e) => setSortDate(e.target.value)}>
                    <option value="" defaultValue disabled>Date</option>
                    <option value="Latest">Latest (Default)</option>
                    <option value="Earliest">Earliest</option>
                </select>

                <select className="port-filter-box" value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="" defaultValue disabled>Type</option>
                    <option value="All">All</option>
                    <option value="University Project">University Project</option>
                    <option value="Personal Project">Personal Project</option>
                    <option value="Team Project">Team Project</option>
                </select>

                <select className="port-filter-box" value={sortStatus} onChange={(e) => setSortStatus(e.target.value)}>
                    <option value="" defaultValue disabled>Status</option>
                    <option value="All">All</option>
                    <option value={true}>Completed</option>
                    <option value={false}>In Progress</option>
                </select>
            </section>

            <Divider style={{
                backgroundColor: "black",
                width: "90vw",
                marginLeft: "5vw"
            }}/>

            <article className="md:mx-[5vw] grid grid-cols-1 2 md:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-20 md:gap-y-40 p-10 md:p-20 text-center">
                <ProjectList 
                    sortDate={sortDate}
                    sortType={sortType} 
                    sortStatus={sortStatus} 
                />
            </article>

            <h2 className="text-center font-bold text-4xl mb-5">My Resume</h2>
            <Resume />
        </main>
    );
};

export default PortfolioPage;