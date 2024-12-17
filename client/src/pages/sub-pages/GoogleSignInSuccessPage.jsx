import { useEffect } from "react";
import { Link } from "react-router-dom";

const GoogleSignInSuccessPage = () => {
    useEffect(() => {
        document.title = "Sign In Succeeded";
    }, []);

    return (
        <main className="email-verify-main">
            <h1 className="email-verify-h1">Signed In Successfully!</h1>
            <p className="email-verify-p">Welcome to my website, you can now access all of the features!</p>
            <Link className="email-verify-btn" to="/">Return to Home Page</Link>
        </main>
    );
};

export default GoogleSignInSuccessPage;