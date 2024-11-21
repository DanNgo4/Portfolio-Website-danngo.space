import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import East from '@mui/icons-material/East';
import South from '@mui/icons-material/South';

import ProjectList from "../../components/portfolio-page/ProjectList";

import PFP from "../../media/images/TransparentPFP0.png";

const HomePage = () => {
    useEffect(() => {
        document.title = "Dan Ngo";
    }, []);

    return (
        <main>
            <article className="p-16 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <section className="md:col-span-2">
                    <h2 className="text-3xl font-bold">Hello World! Welcome to Dan Ngo's Website</h2>
                    <p>I am delighted to have you in my digital space! My name's Dan, currently a third-year Computer Science student at&nbsp;
                        <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank" className="hyperlink">
                            Swinburne University of Technology
                        </Link>.
                    </p><br />

                    <h2 className="text-3xl font-bold">What You'll Find Here:</h2>
                    <p>This website serves as a dynamic canvas where I showcase my techy journey, share insights gained from my studies, and display my software products. Whether you're a fellow student, a tech enthusiast, or just someone curious about the world of coding and computers, I hope you find something engaging and insightful here.</p>
                </section>

                <img src={PFP} alt="Dan Ngo's Profile" className="md:justify-self-end md:max-w-64 max-w-full"/>
            </article>

            <article className="p-8 md:p-16 bg-[var(--article-bg)] text-center">
                <h2 className="mb-12 text-[var(--article-heading)] text-4xl md:text-6xl font-bold">Check out my work!</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <ProjectList limited={true} />
                </div>
            </article>

            <article className="clear-both p-8 md:p-16 flex flex-col md:flex-row items-center justify-center my-8 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-0 md:mr-12">Discover my Story</h2>

                <span className="hidden md:block">
                    <East 
                        className="animate-horizontalBounce mr-8"
                        sx={{ fontSize: 60 }}
                    />
                </span>
                <span className="md:hidden block">
                    <South 
                        className="animate-bounce mb-4"
                        sx={{ fontSize: 40 }}
                    />
                </span>


                <Link to="/about" className="about-me-btn font-bold border-8 rounded-full border-[var(--btn-blue)] shadow-xl hover:text-[var(--apple-white)] px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl">
                    About Me
                </Link>
            </article>


            <article className="p-16 bg-[var(--article-bg)] text-center px-10">
                <h2 className="text-[var(--article-heading)] text-4xl md:text-6xl font-bold mb-12">Tell me what you think</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 text-2xl md:text-4xl">
                    <HashLink smooth to="/portfolio/portfolio-website#Feedback" className="justify-self-center md:justify-self-end">
                        <div className="expandable-box md:w-52 md:hover:w-[29.125rem]">
                            <span className="md:hidden">Kindly drop your</span>&nbsp;Feedback
                        </div>
                    </HashLink>

                    <HashLink smooth to="/about#Social" className="justify-self-center md:justify-self-start">
                        <div className="expandable-box md:w-56 md:hover:w-[35.625rem]">
                            Contact Me&nbsp;<span className="md:hidden">through Social Media</span>
                        </div>
                    </HashLink>
                </section>
            </article>
        </main>
    );
};

export default HomePage;