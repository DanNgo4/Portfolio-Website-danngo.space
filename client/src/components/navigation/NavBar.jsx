import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { getAuth, signOut } from "firebase/auth";

import Person from "@mui/icons-material/Person";
import Login from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";

import useUser from "../../utils/hooks/useUser";

import TogglableBtn from "../TogglableBtn";

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
                <section className="mx-auto flex justify-between items-center relative">
                    <Link to="/" className="ml-8">
                        <img src={Logo} alt="Dan Ngo Logo" />
                    </Link>

                    <ul className="hidden md:flex md:justify-center absolute left-1/2 transform -translate-x-1/2">
                        <li><NavLink to="/"                                    className="nav-btn">Home</NavLink></li>
                        <li><NavLink to="/about"                               className="nav-btn">About</NavLink></li>
                        <li><NavLink to="/portfolio"                           className="nav-btn">Portfolio</NavLink></li>
                        <li><HashLink smooth to="/portfolio#Resume"            className="nav-btn">Resume</HashLink></li>
                        <li><HashLink smooth to="/about#Social"                className="nav-btn">Contact</HashLink></li>
                    </ul>

                    <ul className="hidden md:flex">
                        { user ?
                            <>
                                <li><p className="text-[var(--apple-white)] px-6">Welcome Back!</p></li>
                                <li><Link onClick={() => signOut(getAuth())}    className="nav-btn">
                                    <Logout style={{
                                        marginRight: "0.5rem",
                                        marginBottom: "0.25rem"
                                    }}/>
                                    Log Out
                                </Link></li>
                            </>
                                :
                            <>
                                <li><NavLink to="/log-in"                       className="nav-btn">
                                    <Login style={{
                                        marginRight: "0.5rem",
                                        marginBottom: "0.25rem"
                                    }}/>
                                    Log In
                                </NavLink></li>
                                <li><NavLink to="/sign-up"                      className="nav-btn">
                                    <Person style={{
                                        marginRight: "0.5rem",
                                        marginBottom: "0.25rem"
                                    }}/>
                                    Sign Up
                                </NavLink></li>
                            </>
                        }
                    </ul>

                    <div className="md:hidden">
                        <TogglableBtn 
                            Btn1={<Menu fontSize="large" />}
                            Btn2={<MenuOpen fontSize="large" />}
                            state={menuOpen}
                            setState={setMenuOpen}
                            callback={toggleMenu}
                            style={{
                                marginRight: "2rem",
                                color: "var(--apple-white)"
                            }}
                        />
                    </div>
                </section>

                <ul className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4`}>
                    <li><NavLink to="/" onClick={toggleMenu}                         className="nav-btn-mobile">Home</NavLink></li>
                    <li><NavLink to="/about" onClick={toggleMenu}                    className="nav-btn-mobile">About</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={toggleMenu}                className="nav-btn-mobile">Portfolio</NavLink></li>
                    <li><HashLink smooth to="/portfolio#Resume" onClick={toggleMenu} className="nav-btn-mobile">Resume</HashLink></li>
                    <li><HashLink smooth to="/about#Social" onClick={toggleMenu}     className="nav-btn-mobile">Contact</HashLink></li>

                    { user ?
                        <>
                            <li><p className="nav-btn-mobile">Welcome Back!</p></li>
                            <li><Link onClick={() => signOut(getAuth())}              className="nav-btn-mobile">
                                <Logout style={{
                                    marginRight: "0.75rem",
                                    marginBottom: "0.3rem"
                                }}/>
                                Log Out
                            </Link></li>
                        </>
                           :
                        <>
                            <li><NavLink to="/log-in" onClick={toggleMenu}            className="nav-btn-mobile">
                                <Login style={{
                                    marginRight: "0.75rem",
                                    marginBottom: "0.3rem"
                                }}/>
                                Log In
                            </NavLink></li>
                            <li><NavLink to="/sign-up" onClick={toggleMenu}           className="nav-btn-mobile">
                                <Person style={{
                                    marginRight: "0.75rem",
                                    marginBottom: "0.3rem"
                                }}/>
                                Sign Up
                            </NavLink></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;