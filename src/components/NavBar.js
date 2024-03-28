import { NavLink } from "react-router-dom";

const NavBar = () => (
    <>
        <header>
            <p>Logo</p>

            <nav>
                <ul>
                    <li><NavLink to="/">                    Home</NavLink></li>
                    <li><NavLink to="/about">               About</NavLink></li>
                    <li><NavLink to="/portfolio">           Portfolio</NavLink></li>
                    <li><NavLink to="/feedback">            Feedback</NavLink></li>
                    <li><NavLink to="/portfolio#Resume">    Resume</NavLink></li>
                    <li><NavLink to="/about#Social">        Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
);

export default NavBar;