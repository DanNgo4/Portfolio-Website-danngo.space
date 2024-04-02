import { useEffect } from "react";
import { Link } from "react-router-dom";
import PFP from "../images/TransparentPFP0.png";

const HomePage = () => {
    useEffect(() => {
        document.title = "Dan Ngo";
    }, []);

    return (
        <main>
            <article className="HomeArticle0">
                <h2>Hello World! Welcome to Dan Ngo's Website</h2>
                <p>I am delighted to have you in my digital space! <br />My name's Dan, currently a second-year Computer Science student at <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank">Swinburne University of Technology</Link>.</p><br />

                <h2>What You'll Find Here:</h2>
                <p>This website serves as a dynamic canvas where I showcase my techy journey, share insights gained from my studies, <br />and display my software products. <br />Whether you're a fellow student, a tech enthusiast, or just someone curious about the world of coding and computers,     <br />I hope you find something engaging and insightful here.</p>
            </article>

            <aside>
                <img src={PFP} alt="Dan Ngo's Profile Picture" />
            </aside>

            <article className="HomeArticle1">
                <h2>Check out my work!</h2>

                <div className="cards">
                    <section className="CardContainer">
                        <Link to="" className="card">
                            <h3>Project 1</h3>

                            <p>oapsdhfffffffffffffffffffffffffffffffffffffffffffffakbdnsfklabdfkabdfabsdfakdsljbflasnffff</p>
                        </Link>
                    </section>

                    <section className="CardContainer">
                        <Link to="" className="card">
                            <h3>Project 2</h3>

                            <p>aiksaksdlhgflkadfgiladfbbilvadfilvkladnvladnvlkadnvjkadgildhfilnaklvnkadbnvlabvilabvabvladbhvbdf</p>
                        </Link>
                    </section>

                    <section className="CardContainer" id="card2">
                        <Link to="" className="card">
                            <h3>Project 3</h3>

                            <p>l;sadnfkXZBvklzdsbvlazdbfgklabdsglbnfnivsbndfdnfblknsdklfbn;sdnfb;ndsfb;nsdg</p>
                        </Link>
                    </section>
                </div>
            </article>

            <article className="HomeArticle2">
                <h2>Discover my Story</h2>
                <span className="arrow">&#8594;</span>

                <Link to="/about">
                    <button>About Me</button>
                </Link>
            </article>

            <article className="HomeArticle3">
                <h2>Tell me what you think</h2>

                <section className="ExpandableBox">
                    <Link to="/feedback">
                        <div className="box1">
                                <span>Kindly drop your</span>&nbsp;Feedback
                        </div>
                    </Link>

                    <Link to="/about#Social">
                        <div className="box2">
                            Contact Me&nbsp;<span>through Social Media</span>
                        </div>
                    </Link>
                </section>
            </article>
        </main>
    );
};

export default HomePage;