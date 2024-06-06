import { useEffect } from "react";
import Divider from "@mui/material/Divider";
import MyDocument from "../components/Resume";

const PortfolioPage = () => {
    useEffect(() => {
        document.title = "My Projects";
    }, []);

    return (
        <main className="Portfolio">
            <h1 className="font-bold text-center text-5xl my-10">Portfolio Gallery</h1>

            <section className="ml-10 grid grid-cols-4 gap-16 w-[45vw] text-center mb-10">
                <h3 className="font-bold text-2xl">Sort By</h3>
                <select className="border border-solid rounded border-black">
                    <option value="" defaultValue disabled>Date</option>
                    <option>Latest (Default)</option>
                    <option>Earliest</option>
                </select>

                <select className="border border-solid rounded border-black">
                    <option value="" defaultValue disabled>Type</option>
                    <option>All</option>
                    <option>University Project</option>
                    <option>Personal Project</option>
                    <option>Team Project</option>
                </select>

                <select className="border border-solid rounded border-black">
                    <option value="" defaultValue disabled>Status</option>
                    <option>All</option>
                    <option>Completed</option>
                    <option>In Progress</option>
                </select>
            </section>

            <Divider style={{
                backgroundColor: "black",
                width: "90vw",
                marginLeft: "5vw"
            }}/>

            <article className="mx-[10vw] grid grid-cols-3 gap-4 p-20 text-center">
                <section className="bg-red-500 w-1/3">asdfg</section>
                <section className="bg-red-500 w-1/3">ailsdgf</section>
                <section className="bg-red-500 w-1/3">alsdfb</section>

                <section className="bg-red-500 w-1/3">asdfg</section>
                <section className="bg-red-500 w-1/3">ailsdgf</section>
                <section className="bg-red-500 w-1/3">alsdfb</section>
            </article>

            <h2 className="text-center font-bold text-4xl mb-5">My Resume</h2>
            <MyDocument />
        </main>
    );
};

export default PortfolioPage;