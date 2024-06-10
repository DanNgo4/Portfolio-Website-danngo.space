import { useEffect } from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../images/FacebookLogo0.png";
import GitHubLogo from "../images/GitHubLogo0.png";
import EmailLogo from "../images/EmailLogo0.png";
import LinkedInLogo from "../images/LinkedInLogo0.png";
import XLogo from "../images/XLogo0.png";

const AboutPage = () => {
    useEffect(() => {
        document.title = "About Me";
    }, []);
    
    return (
        <main>
            {/* <article className="bg-[url('./images/SwordLake1.jpg')] bg-no-repeat bg-cover clear-both mt-10 h-[38rem] pt-36 pl-36">
                <section className="bg-[rgba(255,255,173,0.7)] w-[28rem]">
                    <h2 className="font-bold text-2xl mb-4">My Origins:</h2>
                    <p>I was born and raised in Hanoi, the capital city of Vietnam. My first experience with a computer is a Window XP back when I was 6 years old. This early exposure sparked my curiosity and laid the foundation for the journey into the world of technology.</p>
                </section>
            </article> */}

            <article className="bg-[url('./images/SwordLake1.jpg')] bg-no-repeat bg-cover clear-both mt-10 h-[38rem] pt-36 pl-4 md:pl-36 flex items-center">
                <section className="bg-[rgba(255,255,173,0.7)] max-w-full md:max-w-[28rem] p-4 md:p-8">
                    <h2 className="font-bold text-xl md:text-2xl mb-4">My Origins:</h2>
                    <p className="text-sm md:text-base">
                    I was born and raised in Hanoi, the capital city of Vietnam. My first experience with a computer was a Windows XP back when I was 6 years old. This early exposure sparked my curiosity and laid the foundation for my journey into the world of technology.
                    </p>
                </section>
            </article>

            <article className="bg-[url('./images/FlindersStreetStation1.jpg')] bg-no-repeat bg-cover clear-both h-[40rem] pt-36 pl-36">
                <section class="bg-[rgba(255,255,173,0.7)] w-[28rem]">
                    <h2 className="font-bold text-2xl mb-4">My Journey:</h2>
                    <p className="mb-2">After completing my High School Education in Vietnam, I embarked on an exciting new chapter by venturing overseas to Melbourne, Australia. Here, my pursuit of knowledge led me to enroll in the Computer Science degree at <Link to="https://en.wikipedia.org/wiki/Swinburne_University_of_Technology" target="_blank" className="underline text-blue-500 hover:bg-[#93DCAE]">Swinburne University of Technology</Link>.</p>

                    <p>Here in Melbourne, I've had the privilege of acquiring an extensive wealth of new knowledge and skills. Additionally, I've also gotten the pleasure of connecting with a diverse network of individuals who have been instrumental in supporting my career development journey.</p>
                </section>
            </article>

            <article className="p-20">
                <h2 className="font-bold text-4xl text-center mb-6">Connect With Me!</h2><br />

                <section id="Social">
                    <ul className="flex justify-center">
                        <li className="float-left mr-12">
                            <Link to="https://www.facebook.com/danh.ngo04/" target="_blank">
                                <img src={FacebookLogo} alt="Facebook Logo" />
                            </Link>
                        </li>
                        <li className="float-left mr-12">
                            <Link to="https://github.com/DanNgo4" target="_blank">
                                <img src={GitHubLogo} alt="GitHub Logo" />
                            </Link>
                        </li>
                        <li className="float-left mr-12">
                            <Link to="mailto:danngo.au@gmail.com">
                                <img src={EmailLogo} alt="Email Logo" />
                            </Link>
                        </li>
                        <li className="float-left mr-12">
                            <Link to="https://www.linkedin.com/in/dan-ngo-71182b261/" target="_blank">
                                <img src={LinkedInLogo} alt="LinkedIn Logo" />
                            </Link>
                        </li>
                        <li className="float-left">
                        <Link to="https://twitter.com/DanNgo04" target="_blank">
                                <img src={XLogo} alt="X/Twitter Logo" />
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    );
};

export default AboutPage;