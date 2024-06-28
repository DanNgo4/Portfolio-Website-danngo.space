import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Logo from "../media/logos/Logo0.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
    <header className="bg-[#33AB5F]">
        <nav className="text-3xl py-6">
            <section className="containter mx-auto flex justify-between items-center">
                <Link to="/" className="ml-8">
                    <img src={Logo} alt="Dan Ngo Logo" />
                </Link>

                <ul className="hidden md:flex">
                    <li><NavLink to="/"                  className="nav-btn">Home</NavLink></li>
                    <li><NavLink to="/about"             className="nav-btn">About</NavLink></li>
                    <li><NavLink to="/portfolio"         className="nav-btn">Portfolio</NavLink></li>
                    <li><NavLink to="/feedback"          className="nav-btn">Feedback</NavLink></li>
                    <li><HashLink to="/portfolio#Resume" className="nav-btn">Resume</HashLink></li>
                    <li><HashLink to="/about#Social"     className="nav-btn">Contact</HashLink></li>
                </ul>

                <button id="menu-btn" className="text-[#F5F4F2] md:hidden focus:outline-none mr-8" onClick={toggleMenu}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6 h16 M4 12 h16 M4 18 h16"></path>
                    </svg>
                </button>
            </section>

            <ul className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4 space-y-2`}>
                    <li><NavLink to="/" onClick={toggleMenu}                  className="nav-btn-mobile">Home</NavLink></li>
                    <li><NavLink to="/about" onClick={toggleMenu}             className="nav-btn-mobile">About</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={toggleMenu}         className="nav-btn-mobile">Portfolio</NavLink></li>
                    <li><NavLink to="/feedback" onClick={toggleMenu}          className="nav-btn-mobile">Feedback</NavLink></li>
                    <li><HashLink to="/portfolio#Resume" onClick={toggleMenu} className="nav-btn-mobile">Resume</HashLink></li>
                    <li><HashLink to="/about#Social" onClick={toggleMenu}     className="nav-btn-mobile">Contact</HashLink></li>
            </ul>
        </nav>
    </header>
    );
};

export default NavBar;