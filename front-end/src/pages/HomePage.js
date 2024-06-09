import { useEffect } from "react";
import { Link } from "react-router-dom";
import PFP from "../images/TransparentPFP0.png";
import ProjectList from "../components/ProjectList";

const HomePage = () => {
    useEffect(() => {
        document.title = "Dan Ngo";
    }, []);

    return (
        <main>
            <article className="p-16 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <section className="md:col-span-2">
                    <h2 className="text-3xl font-bold">Hello World! Welcome to Dan Ngo's Website</h2>
                    <p>I am delighted to have you in my digital space! My name's Dan, currently a second-year Computer Science student at&nbsp;
                        <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank" className="underline text-blue-500 hover:bg-[#93DCAE]">
                            Swinburne University of Technology
                        </Link>.
                    </p><br />

                    <h2 className="text-3xl font-bold">What You'll Find Here:</h2>
                    <p>This website serves as a dynamic canvas where I showcase my techy journey, share insights gained from my studies, and display my software products. Whether you're a fellow student, a tech enthusiast, or just someone curious about the world of coding and computers, I hope you find something engaging and insightful here.</p>
                </section>

                <img src={PFP} alt="Dan Ngo's Profile" className="md:justify-self-end md:max-w-64 max-w-full"/>
            </article>

            <article className="clear-both p-16 bg-[#93DCAE] text-center">
                <h2 className="mb-12 text-[#3A4A40] text-6xl font-bold">Check out my work!</h2>

                <div className="grid grid-cols-3 gap-10">
                    <ProjectList limited={true} />
                </div>
            </article>

            <article className="clear-both p-16 flex flex-row items-center justify-center my-8">
                <h2 className="text-6xl font-bold mr-16">Discover my Story</h2>
                <span className="mr-2 ml-12 text-7xl">&#8594;</span>

                <Link to="/about">
                    <button className="bg-[#FDFBF7] border-8 border-solid border-[#006FAD] px-16 py-8 rounded-full text-2xl font-bold 
                                       duration-700 hover:bg-[#006FAD] hover:text-[#FDFBF7]">About Me</button>
                </Link>
            </article>

            <article className="clear-both p-16 bg-[#93DCAE] text-center px-10">
                <h2 className="text-[#3A4A40] text-6xl font-bold mb-12">Tell me what you think</h2>

                <div className="grid grid-cols-2 gap-40 text-4xl">
                    <Link to="/feedback" className="justify-self-end">
                        <div className="box1 w-52 p-5 whitespace-nowrap bg-[#73AEFE] rounded-lg duration-[1200ms] overflow-hidden hover:w-[29.125rem]">
                            <span className="hidden">Kindly drop your</span>&nbsp;Feedback
                        </div>
                    </Link>

                    <Link to="/about#Social" className="justify-self-start">
                        <div className="box2 w-56 p-5 whitespace-nowrap bg-[#73AEFE] rounded-lg duration-[1200ms] overflow-hidden hover:w-[35.625rem]">
                            Contact Me&nbsp;<span className="hidden">through Social Media</span>
                        </div>
                    </Link>
                </div>
            </article>
        </main>
    );
};

export default HomePage;