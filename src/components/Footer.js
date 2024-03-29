import { Link } from "react-router-dom";
import Logo from "../images/Logo0.png";

const Footer = () => (
    <footer>
        <Link to="/" class="logo">
            <img src={Logo} alt="Dan Ngo Logo" />
        </Link>
    </footer>
);

export default Footer;