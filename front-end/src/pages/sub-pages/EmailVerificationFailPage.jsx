import { useEffect } from "react";
import { Link } from "react-router-dom";

const EmailVerificationFailPage = () => {
    useEffect(() => {
        document.title = "Verification Failed";
    }, []);

    return (
        <main className="email-verify-main">
            <h1 className="email-verify-h1">Oops... Something Wrong Happened</h1>
            <p className="email-verify-p">Something went wrong while verifying your email.</p>
            <Link className="email-verify-btn" to="/sign-up">Return to Sign Up</Link>
        </main>
    );
};

export default EmailVerificationFailPage;