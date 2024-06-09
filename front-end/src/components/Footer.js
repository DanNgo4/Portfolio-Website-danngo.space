import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Divider from "@mui/material/Divider";
import Logo from "../images/Logo0.png";
import FacebookLogo from "../images/FacebookLogo1.png";
import GitHubLogo from "../images/GitHubLogo1.png";
import EmailLogo from "../images/EmailLogo1.png";
import LinkedInLogo from "../images/LinkedInLogo1.png";
import XLogo from "../images/XLogo1.png";

const Footer = () => (
    <footer className="bg-[#33AB5F] p-8 md:p-16 container mx-auto flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="mb-8 md:mb-0">
                <img src={Logo} alt="Dan Ngo Logo" className="h-16" />
            </Link>

            <section className="w-full md:w-auto flex flex-col items-center md:items-start">
                <ul className="flex flex-col items-center md:flex-row mb-4 md:mb-0">
                    <li><NavLink to="/"                  className="text-[#F5F4F2] text-xl hover:underline mr-0 md:mr-8 mb-2 md:mb-0">Home</NavLink></li>
                    <li><NavLink to="/about"             className="text-[#F5F4F2] text-xl hover:underline mr-0 md:mr-8 mb-2 md:mb-0">About</NavLink></li>
                    <li><NavLink to="/portfolio"         className="text-[#F5F4F2] text-xl hover:underline mr-0 md:mr-8 mb-2 md:mb-0">Portfolio</NavLink></li>
                    <li><NavLink to="/feedback"          className="text-[#F5F4F2] text-xl hover:underline mr-0 md:mr-8 mb-2 md:mb-0">Feedback</NavLink></li>
                    <li><HashLink to="/portfolio#Resume" className="text-[#F5F4F2] text-xl hover:underline mr-0 md:mr-8 mb-2 md:mb-0">Resume</HashLink></li>
                    <li><HashLink to="/about#Social"     className="text-[#F5F4F2] text-xl hover:underline">Contact</HashLink></li>
                </ul>

                <Divider style={{
                    backgroundColor: "#F5F4F2",
                    width: "100%",
                    margin: "0.5rem 0",
                }}/> {/* Material UI component */}

                <ul className="flex justify-center md:justify-end">
                    <li>
                        <Link to="https://www.facebook.com/danh.ngo04/" target="_blank"><img src={FacebookLogo} alt={"Facebook Logo"} className="h-8" /></Link>
                    </li>
                    <li className="ml-6">
                        <Link to="https://github.com/DanNgo4" target="_blank"><img src={GitHubLogo} alt="GitHub Logo" className="h-8" /></Link>
                    </li>
                    <li className="ml-6">
                        <Link to="mailto:danngo.au@gmail.com"><img src={EmailLogo} alt="Email Logo" className="h-8" /></Link>
                    </li>
                    <li className="ml-6">
                        <Link to="https://www.linkedin.com/in/dan-ngo-71182b261/" target="_blank"><img src={LinkedInLogo} alt="LinkedIn Logo" className="h-8" /></Link>
                    </li>
                    <li className="ml-6">
                        <Link to="https://twitter.com/DanNgo04" target="_blank"><img src={XLogo} alt="X/Twitter Logo" className="h-8" /></Link>
                    </li>
                </ul>
            </section>
    </footer>
);

export default Footer;





    {/* <footer className="bg-[#33AB5F] h-52 p-16 pr-[15vw]">
        <Link to="/" className="float-left top-1/2">
            <img src={Logo} alt="Dan Ngo Logo" />
        </Link>

        <section className="ml-48">
            <ul className="flex">
                <li className="float-left"><NavLink to="/"                  className="mr-8 text-[#F5F4F2] text-xl hover:underline">Home</NavLink></li>
                <li className="float-left"><NavLink to="/about"             className="mr-8 text-[#F5F4F2] text-xl hover:underline">About</NavLink></li>
                <li className="float-left"><NavLink to="/portfolio"         className="mr-8 text-[#F5F4F2] text-xl hover:underline">Portfolio</NavLink></li>
                <li className="float-left"><NavLink to="/feedback"          className="mr-8 text-[#F5F4F2] text-xl hover:underline">Feedback</NavLink></li>
                <li className="float-left"><HashLink to="/portfolio#Resume" className="mr-8 text-[#F5F4F2] text-xl hover:underline">Resume</HashLink></li>
                <li className="float-left"><HashLink to="/about#Social"     className="text-[#F5F4F2] text-xl hover:underline">Contact</HashLink></li>
            </ul>

            <Divider style={{
                backgroundColor: "#F5F4F2",
                width: "70vw",
                margin: "0.5rem 0",
            }}/> 

            <ul className="flex justify-end">
                <li>
                    <Link to="https://www.facebook.com/danh.ngo04/" target="_blank"><img src={FacebookLogo} alt={"Facebook Logo"} /></Link>
                </li>
                <li className="ml-6">
                    <Link to="https://github.com/DanNgo4" target="_blank"><img src={GitHubLogo} alt="GitHub Logo" /></Link>
                </li>
                <li className="ml-6">
                    <Link to="mailto:danngo.au@gmail.com"><img src={EmailLogo} alt="Email Logo" /></Link>
                </li>
                <li className="ml-6">
                    <Link to="https://www.linkedin.com/in/dan-ngo-71182b261/" target="_blank"><img src={LinkedInLogo} alt="LinkedIn Logo" /></Link>
                </li>
                <li className="ml-6">
                    <Link to="https://twitter.com/DanNgo04" target="_blank"><img src={XLogo} alt="X/Twitter Logo" /></Link>
                </li>
            </ul>
        </section>
    </footer> */}