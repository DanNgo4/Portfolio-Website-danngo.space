import { Link } from "react-router-dom";
import Logo from "../images/Logo0.png";

const Footer = () => (
    <footer className="bg-[#33AB5F] h-52 shrink-0 sticky top-[100vh]">
        <Link to="/" className="float-left mt-7 ml-7">
            <img src={Logo} alt="Dan Ngo Logo" />
        </Link>
    </footer>
);

export default Footer;