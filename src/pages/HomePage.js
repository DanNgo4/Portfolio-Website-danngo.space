import { Link } from "react-router-dom";
import PFP from "../images/TransparentPFP0.png";

const HomePage = () => (
    <>
        <main>
            <article class="HomeArticle0">
                <h2>Hello World! Welcome to Dan Ngo's Website</h2>
                <p>I am delighted to have you in my digital space! <br />My name's Dan, currently a second-year Computer Science student at <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank">Swinburne University of Technology</Link>.</p><br />

                <h2>What You'll Find Here:</h2>
                <p>This website serves as a dynamic canvas where I showcase my techy journey, share insights gained from my studies, <br />and display my software products. <br />Whether you're a fellow student, a tech enthusiast, or just someone curious about the world of coding and computers,     <br />I hope you find something engaging and insightful here.</p>
            </article>

            <aside>
                <img src={PFP} alt="Dan Ngo's Profile Picture" />
            </aside>

            <article class="HomeArticle1">
                <h2>Check out my work!</h2>

                <Link to="" class="card">
                    <h3>Project 1</h3>

                    <p>oapsdhffffffffffffffffffffffffffffffffffffffffffffffff</p>
                </Link>

                <Link to="" class="card" id="card1">
                    <h3>Project 2</h3>

                    <p>aiksbdf</p>
                </Link>

                <Link to="" class="card" id="card2">
                    <h3>Project 3</h3>

                    <p>l;sadnfg</p>
                </Link>
            </article>
        </main>

        <section class="HomeSection0">
            <h2>Discover my Story</h2>

            <Link to="/about" class="button">About Me</Link>
        </section>

        <section class="HomeSection1">
            <h2>Tell me what you think</h2>

            <div class="container">
                <Link to="/feedback">Kindly Drop Your Feedback</Link>
            </div>

            <Link to="/about">Contact Me Through Social Media</Link>
        </section>
    </>
);

export default HomePage;