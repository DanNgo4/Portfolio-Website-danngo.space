import { useEffect } from "react";
import { Link } from "react-router-dom";
import PFP from "../images/TransparentPFP0.png";

const HomePage = () => {
    useEffect(() => {
        document.title = "Dan Ngo";
    }, []);

    return (
        <main>
            <article>
                <div className="float-left">
                    <h2>Hello World! Welcome to Dan Ngo's Website</h2>
                    <p>I am delighted to have you in my digital space! <br />My name's Dan, currently a second-year Computer Science student at&nbsp;
                        <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank" className="underline text-blue-500 hover:bg-[#93DCAE]">
                            Swinburne University of Technology
                        </Link>.
                    </p><br />

                    <h2>What You'll Find Here:</h2>
                    <p>This website serves as a dynamic canvas where I showcase my techy journey, share insights gained from my studies, <br />and display my software products. <br />Whether you're a fellow student, a tech enthusiast, or just someone curious about the world of coding and computers,     <br />I hope you find something engaging and insightful here.</p>
                </div>

                <aside className="float-right mb-10">
                    <img src={PFP} alt="Dan Ngo's Profile Picture" className="max-w-72 mr-38 -mt-20"/>
                </aside>
            </article>

            <article className="bg-[#93DCAE] flex flex-col items-center justify-center">
                <h2 className="mb-12 text-[#3A4A40] text-6xl">Check out my work!</h2>

                <div className="flex flex-row items-center justify-center text-center">
                    <section className="CardContainer ml-40">
                        <Link to="">
                            <h3>Project 1</h3>

                            <p>oapsdhfffffffffffffffffffffffffffffffffffffffffffffakbdnsfklabdfkabdfabsdfakdsljbflasnffff</p>
                        </Link>
                    </section>

                    <section className="CardContainer">
                        <Link to="">
                            <h3>Project 2</h3>

                            <p>aiksaksdlhgflkadfgiladfbbilvadfilvkladnvladnvlkadnvjkadgildhfilnaklvnkadbnvlabvi</p>
                        </Link>
                    </section>

                    <section className="CardContainer">
                        <Link to="">
                            <h3>Project 3</h3>

                            <p>l;sadnfkXZBvklzdsbvlazdbfgklabdsglbnfnivsbndfdnfblknsdklfbn;sdnfb;ndsfb;nsdg</p>
                        </Link>
                    </section>
                </div>
            </article>

            <article className="flex flex-row items-center justify-center my-8">
                <h2 className="text-6xl mr-16">Discover my Story</h2>
                <span className="mr-2 ml-12 text-7xl">&#8594;</span>

                <Link to="/about">
                    <button className="bg-[#FDFBF7] border-8 border-solid border-[#006FAD] px-16 py-8 rounded-full text-2xl font-bold 
                                       duration-700 hover:bg-[#006FAD] hover:text-[#FDFBF7]">About Me</button>
                </Link>
            </article>

            <article className="bg-[#93DCAE] text-center px-10">
                <h2 className="text-[#3A4A40] text-6xl mb-12">Tell me what you think</h2>

                <section className="flex justify-center relative text-4xl my-6">
                    <Link to="/feedback">
                        <div className="box1 justify-end w-52 right-1/2 hover:w-[29.125rem]">
                                <span className="relative invisible">Kindly drop your</span>&nbsp;Feedback
                        </div>
                    </Link>

                    <Link to="/about#Social">
                        <div className="box2 justify-start w-56 left-1/2 hover:w-[35.625rem]">
                            Contact Me&nbsp;<span className="relative invisible">through Social Media</span>
                        </div>
                    </Link>
                </section>
            </article>
        </main>
    );
};

export default HomePage;