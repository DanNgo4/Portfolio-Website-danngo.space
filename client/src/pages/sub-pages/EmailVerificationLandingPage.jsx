import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";

const EmailVerificationLandingPage = () => {
    useEffect(() => {
        document.title = "Please Verify Your Email!";
    }, []);

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 300000);
    }, [navigate]);

    const email = getAuth().currentUser.email;

    return (
        <main className="email-verify-main">
            <h1 className="email-verify-h1">Thanks for Signing Up!</h1>
            <p className="email-verify-p">
                A verification email has been sent to <strong>{email}</strong>.
                Please verify your email to unlock full site features.
            </p>
        </main>
    );
};

export default EmailVerificationLandingPage;