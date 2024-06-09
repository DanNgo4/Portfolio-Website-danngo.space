import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../images/Logo0.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
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
                    <li><NavLink to="/"                  className="text-[#F5F4F2] px-8 py-14 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Home</NavLink></li>
                    <li><NavLink to="/about"             className="text-[#F5F4F2] px-8 py-14 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">About</NavLink></li>
                    <li><NavLink to="/portfolio"         className="text-[#F5F4F2] px-8 py-14 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Portfolio</NavLink></li>
                    <li><NavLink to="/feedback"          className="text-[#F5F4F2] px-8 py-14 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Feedback</NavLink></li>
                    <li><HashLink to="/portfolio#Resume" className="text-[#F5F4F2] px-8 py-14 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Resume</HashLink></li>
                    <li><HashLink to="/about#Social"     className="text-[#F5F4F2] px-8 py-14 hover:text-[#212124] hover:bg-[#D3FFB3] duration-500">Contact</HashLink></li>
                </ul>

                <div className="md:hidden">
                    <button id="menu-btn" className="text-white focus:outline-none mr-8" onClick={handleMenuToggle}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </section>

            <ul className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4 space-y-2`}>
                    <li><NavLink to="/" onClick={handleMenuToggle}                  className="block text-[#F5F4F2] px-8 py-10">Home</NavLink></li>
                    <li><NavLink to="/about" onClick={handleMenuToggle}             className="block text-[#F5F4F2] px-8 py-10">About</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={handleMenuToggle}         className="block text-[#F5F4F2] px-8 py-10">Portfolio</NavLink></li>
                    <li><NavLink to="/feedback" onClick={handleMenuToggle}          className="block text-[#F5F4F2] px-8 py-10">Feedback</NavLink></li>
                    <li><HashLink to="/portfolio#Resume" onClick={handleMenuToggle} className="block text-[#F5F4F2] px-8 py-10">Resume</HashLink></li>
                    <li><HashLink to="/about#Social" onClick={handleMenuToggle}     className="block text-[#F5F4F2] px-8 py-10">Contact</HashLink></li>
                </ul>
        </nav>
    </header>
    );
};

export default NavBar;