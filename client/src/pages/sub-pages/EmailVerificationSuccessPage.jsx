import { useEffect } from "react";
import { Link } from "react-router-dom";

const EmailVerificationSuccessPage = () => {
    useEffect(() => {
        document.title = "Verification Succeeded";
    }, []);

    return (
        <main className="email-verify-main">
            <h1 className="email-verify-h1">Email Verified Successfully!</h1>
            <p className="email-verify-p">Your email has been successfully verified. You can now access all the features of my website.</p>
            <Link className="email-verify-btn" to="/">Return to Home Page</Link>
        </main>
    );
};

export default EmailVerificationSuccessPage;