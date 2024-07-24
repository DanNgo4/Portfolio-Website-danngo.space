import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { getAuth, signOut } from "firebase/auth";

import useUser from "../../hooks/useUser";

import Logo from "../../media/logos/Logo0.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { user } = useUser();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-[var(--head-foot-bg)]">
            <nav className="text-2xl py-6">
                <section className="containter mx-auto flex justify-between items-center">
                    <Link to="/" className="ml-8">
                        <img src={Logo} alt="Dan Ngo Logo" />
                    </Link>

                    <ul className="hidden md:flex">
                        <li><NavLink to="/"                                    className="nav-btn">Home</NavLink></li>
                        <li><NavLink to="/about"                               className="nav-btn">About</NavLink></li>
                        <li><NavLink to="/portfolio"                           className="nav-btn">Portfolio</NavLink></li>
                        <li><HashLink smooth to="/portfolio#Resume"            className="nav-btn">Resume</HashLink></li>
                        <li><HashLink smooth to="/about#Social"                className="nav-btn">Contact</HashLink></li>

                        <li>{
                            user ? <p className="text-[var(--apple-white)] px-6">Welcome Back!</p>
                                 : <NavLink to="/sign-up"                      className="nav-btn">Sign Up</NavLink>
                        }</li>
                        
                        <li>{
                            user ? <Link onClick={() => signOut(getAuth())}    className="nav-btn">Log Out</Link>
                                 : <NavLink to="/log-in"                       className="nav-btn">Log In</NavLink>
                        }</li>
                    </ul>

                    <button id="menu-btn" className="text-[var(--apple-white)] md:hidden focus:outline-none mr-8" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6 h16 M4 12 h16 M4 18 h16"></path>
                        </svg>
                    </button>
                </section>

                <ul className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4 space-y-2`}>
                    <li><NavLink to="/" onClick={toggleMenu}                         className="nav-btn-mobile">Home</NavLink></li>
                    <li><NavLink to="/about" onClick={toggleMenu}                    className="nav-btn-mobile">About</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={toggleMenu}                className="nav-btn-mobile">Portfolio</NavLink></li>
                    <li><HashLink smooth to="/portfolio#Resume" onClick={toggleMenu} className="nav-btn-mobile">Resume</HashLink></li>
                    <li><HashLink smooth to="/about#Social" onClick={toggleMenu}     className="nav-btn-mobile">Contact</HashLink></li>

                    <li>{
                        user ? <p className="nav-btn-mobile">Welcome Back!</p>
                             : <NavLink to="/sign-up" onClick={toggleMenu}           className="nav-btn-mobile">Sign Up</NavLink>
                    }</li>
                    
                    <li>{
                        user ? <Link onClick={() => signOut(getAuth())}              className="nav-btn-mobile">Log Out</Link>
                             : <NavLink to="/log-in" onClick={toggleMenu}            className="nav-btn-mobile">Log In</NavLink>
                    }</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;