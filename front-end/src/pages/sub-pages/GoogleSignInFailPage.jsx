import { useEffect } from "react";
import { Link } from "react-router-dom";

const GoogleSignInFailPage = () => {
    useEffect(() => {
        document.title = "Sign In Failed";
    }, []);

    return (
        <main className="email-verify-main">
            <h1 className="email-verify-h1">Oops... Something Wrong Happened</h1>
            <p className="email-verify-p">Something went wrong while signing you in.</p>
            <Link className="email-verify-btn" to="/log-in">Return to Log In</Link>
        </main>
    );
};

export default GoogleSignInFailPage;