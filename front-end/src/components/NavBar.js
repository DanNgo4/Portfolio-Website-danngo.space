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
                <li className="float-left"><NavLink to="/" activeclassname="active">                 Home</NavLink></li>
                <li className="float-left"><NavLink to="/about" activeclassname="active">            About</NavLink></li>
                <li className="float-left"><NavLink to="/portfolio" activeclassname="active">        Portfolio</NavLink></li>
                <li className="float-left"><NavLink to="/feedback" activeclassname="active">         Feedback</NavLink></li>
                <li className="float-left"><HashLink to="/portfolio#Resume" activeclassname="active">Resume</HashLink></li>
                <li className="float-left"><HashLink to="/about#Social" activeclassname="active">    Contact</HashLink></li>
            </ul>
        </nav>
    </header>
);

export default NavBar;