import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Divider from "@mui/material/Divider";

import Logo from "../media/logos/Logo0.png";
import FacebookLogo from "../media/logos/FacebookLogo1.png";
import GitHubLogo from "../media/logos/GitHubLogo1.png";
import EmailLogo from "../media/logos/EmailLogo1.png";
import LinkedInLogo from "../media/logos/LinkedInLogo1.png";
import XLogo from "../media/logos/XLogo1.png";

const Footer = () => (
    <footer className="bg-[var(--head-foot-bg)] p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start">
        <Link to="/" className="mb-8 md:mb-0 md:mr-16">
            <img src={Logo} alt="Dan Ngo Logo" />
        </Link>

        <section className="flex flex-col items-center md:items-start w-full">
            <ul className="flex flex-col items-center md:flex-row mb-4 md:mb-0 text-center md:text-left">
                <li className="footer-li"><NavLink to="/"                  className="footer-btn">Home</NavLink></li>
                <li className="footer-li"><NavLink to="/about"             className="footer-btn">About</NavLink></li>
                <li className="footer-li"><NavLink to="/portfolio"         className="footer-btn">Portfolio</NavLink></li>
                <li className="footer-li"><NavLink to="/feedback"          className="footer-btn">Feedback</NavLink></li>
                <li className="footer-li"><HashLink to="/portfolio#Resume" className="footer-btn">Resume</HashLink></li>
                <li><HashLink to="/about#Social"     className="footer-btn">Contact</HashLink></li>
            </ul>

            <Divider style={{
                backgroundColor: "var(--apple-white)",
                width: "100%",
                margin: "0.5rem 0",
            }}/> {/* Material UI component */}

            <ul className="flex justify-center md:justify-end w-full">
                <li>
                    <Link to="https://www.facebook.com/danh.ngo04/" target="_blank"><img src={FacebookLogo} alt="Facebook Logo" className="h-8" /></Link>
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