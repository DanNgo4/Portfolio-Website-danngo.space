import { useEffect } from "react";
import { Link } from "react-router-dom";
import PFP from "../images/TransparentPFP0.png";

const HomePage = () => {
    useEffect(() => {
        document.title = "Dan Ngo";
    }, []);

    return (
        <main>
            <article className="clear-both p-16">
                <div className="float-left">
                    <h2 className="text-3xl font-bold">Hello World! Welcome to Dan Ngo's Website</h2>
                    <p>I am delighted to have you in my digital space! <br />My name's Dan, currently a second-year Computer Science student at&nbsp;
                        <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank" className="underline text-blue-500 hover:bg-[#93DCAE]">
                            Swinburne University of Technology
                        </Link>.
                    </p><br />

                    <h2 className="text-3xl font-bold">What You'll Find Here:</h2>
                    <p>This website serves as a dynamic canvas where I showcase my techy journey, share insights gained from my studies, <br />and display my software products. <br />Whether you're a fellow student, a tech enthusiast, or just someone curious about the world of coding and computers,     <br />I hope you find something engaging and insightful here.</p>
                </div>

                <aside className="float-right mb-10">
                    <img src={PFP} alt="Dan Ngo's Profile Picture" className="max-w-72 mr-38 -mt-20"/>
                </aside>
            </article>

            <article className="clear-both p-16 bg-[#93DCAE] text-center">
                <h2 className="mb-12 text-[#3A4A40] text-6xl font-bold">Check out my work!</h2>

                <div className="grid grid-cols-3 gap-20 break-words">
                    <section className="justify-self-end max-w-60 min-h-56 bg-[#F8E382]  p-8 shadow-xl hover:bg-[#D3FFB3] duration-500">
                        <Link to="">
                            <h3 className="text-2xl mb-4 font-semibold">Project 1</h3>

                            <p>oapsdhfffffffffffffffffffffffffffffffffffffffffffffakbdnsfklabdfkabdfabsdfakdsljbflasnffff</p>
                        </Link>
                    </section>

                    <section className="justify-self-center max-w-60 min-h-56 bg-[#F8E382] p-8 shadow-xl hover:bg-[#D3FFB3] duration-500">
                        <Link to="">
                            <h3 className="text-2xl mb-4 font-semibold">Project 2</h3>

                            <p>aiksaksdlhgflkadfgiladfbbilvadfilvkladnvladnvlkadnvjkadgildhfilnaklvnkadbnvlabvi</p>
                        </Link>
                    </section>

                    <section className="justify-self-start max-w-60 min-h-56 bg-[#F8E382] p-8 shadow-xl hover:bg-[#D3FFB3] duration-500">
                        <Link to="">
                            <h3 className="text-2xl mb-4 font-semibold">Project 3</h3>

                            <p>l;sadnfkXZBvklzdsbvlazdbfgklabdsglbnfnivsbndfdnfblknsdklfbn;sdnfb;ndsfb;nsdg</p>
                        </Link>
                    </section>
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