import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../images/Logo0.png";

const NavBar = () => (
    <header>
        <Link to="/" class="logo">
            <img src={Logo} alt="Dan Ngo Logo" />
        </Link>

        <nav>
            <ul>
                <li><NavLink to="/" activeclassname="active">                 Home</NavLink></li>
                <li><NavLink to="/about" activeclassname="active">            About</NavLink></li>
                <li><NavLink to="/portfolio" activeclassname="active">        Portfolio</NavLink></li>
                <li><NavLink to="/feedback" activeclassname="active">         Feedback</NavLink></li>
                <li><HashLink to="/portfolio#Resume" activeclassname="active">Resume</HashLink></li>
                <li><HashLink to="/about#Social" activeclassname="active">    Contact</HashLink></li>
            </ul>
        </nav>
    </header>
);

export default NavBar;