import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../images/Logo0.png";

const NavBar = () => (
    <header className="bg-[#33AB5F] text-3xl flex justify-between">
        <Link to="/" className="float-left mt-7 ml-7">
            <img src={Logo} alt="Dan Ngo Logo" />
        </Link>

        <nav>
            <ul>
                <li className="float-left"><NavLink to="/"                  activeclassname="active" className="float-right text-[#F5F4F2] px-8 py-10 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Home</NavLink></li>
                <li className="float-left"><NavLink to="/about"             activeclassname="active" className="float-right text-[#F5F4F2] px-8 py-10 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">About</NavLink></li>
                <li className="float-left"><NavLink to="/portfolio"         activeclassname="active" className="float-right text-[#F5F4F2] px-8 py-10 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Portfolio</NavLink></li>
                <li className="float-left"><NavLink to="/feedback"          activeclassname="active" className="float-right text-[#F5F4F2] px-8 py-10 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Feedback</NavLink></li>
                <li className="float-left"><HashLink to="/portfolio#Resume" activeclassname="active" className="float-right text-[#F5F4F2] px-8 py-10 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Resume</HashLink></li>
                <li className="float-left"><HashLink to="/about#Social"     activeclassname="active" className="float-right text-[#F5F4F2] px-8 py-10 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Contact</HashLink></li>
            </ul>
        </nav>
    </header>
);

export default NavBar;