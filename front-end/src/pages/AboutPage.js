import { useEffect } from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../images/FacebookLogo0.png";
import XLogo from "../images/XLogo0.png";
import EmailLogo from "../images/EmailLogo0.png";
import LinkedInLogo from "../images/LinkedInLogo0.png";
import GitHubLogo from "../images/GitHubLogo0.png";

const AboutPage = () => {
    useEffect(() => {
        document.title = "About Me";
    }, []);
    
    return (
        <main class="AboutMain">
            <article class="AboutArticle0">
                <section class="AboutDescription">
                    <h1>My Origins:</h1>
                    <p>I was born and raised in Hanoi, the capital city of Vietnam. My first experience with a computer is a Window XP back when I was 6 years old. This early exposure sparked my curiosity and laid the foundation for the journey into the world of technology.</p>
                </section>
            </article>

            <article class="AboutArticle1">
                <section class="AboutDescription">
                    <h1>My Journey:</h1>
                    <p>After completing my High School Education in Vietnam, I embarked on an exciting new chapter by venturing overseas to Melbourne, Australia. Here, my pursuit of knowledge led me to enroll in the Computer Science program at <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank">Swinburne University of Technology</Link>.</p>

                    <p>Here in Melbourne, I've had the privilege of acquiring an extensive wealth of new knowledge and skills. Additionally, I've also gotten the pleasure of connecting with a diverse network of individuals who have been instrumental in supporting my career development journey.</p>
                </section>
            </article>

            <article className="AboutArticle2">
                <h1>Connect With Me!</h1><br />

                <section id="Social">
                    <ul>
                        <li>
                            <Link to="https://www.facebook.com/danh.ngo04/" target="_blank">
                                <img src={FacebookLogo} alt="Facebook Logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://twitter.com/DanNgo04" target="_blank">
                                <img src={XLogo} alt="X/Twitter Logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:danngo.au@gmail.com">
                                <img src={EmailLogo} alt="Email Logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/dan-ngo-71182b261/" target="_blank">
                                <img src={LinkedInLogo} alt="LinkedIn Logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/DanNgo4" target="_blank">
                                <img src={GitHubLogo} alt="GitHub Logo" />
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    );
};

export default AboutPage;