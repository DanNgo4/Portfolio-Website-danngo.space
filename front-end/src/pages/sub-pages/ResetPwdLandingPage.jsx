import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ResetPwdLandingPage = () => {
    useEffect(() => {
        document.title = "Reset Your Password";
    }, []);

    const [email, setEmail] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(getAuth(), email);
            setEmailSubmitted(true);
        } catch (e) {
            if (e.message === "Firebase: Error (auth/user-not-found).") {
                setError("User not found, please try again!");
            }
            setEmailSubmitted(false);
            setEmail("");
            console.error("Error reseting password", e);
        }
    };

    return (
        <main className="email-verify-main">
            <form onSubmit={sendEmail} className="flex flex-col">
                <h1 className="email-verify-h1">Reset Password</h1>

                <label htmlFor="resetPwd" className="my-4 text-center">{
                    emailSubmitted 
                    ? <>
                        An email has been sent to <br/>
                        <strong>{email}</strong>,<br />
                        please check your mailbox!
                      </> 

                    : <>
                        Please enter your email below:
                      </>
                }</label>

                <input 
                    id="resetPwd"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Your email address"
                    className="log-sign-input-box mb-6"
                />

                { error && <p className="text-red-500 mb-3">Error: {error}</p> }

                <input
                    type="submit"
                    value={emailSubmitted ? "Resend Email" : "Continue"}
                    disabled={!email}
                    className="log-sign-submit-btn"
                />

                <p className="text-center">
                    Don't have an account?&nbsp;
                    <br className="md:hidden" />

                    <Link
                        to="/sign-up"
                        className="hyperlink"
                    > 
                        Sign up here
                    </Link>
                </p>
            </form>
        </main>
    );
};

export default ResetPwdLandingPage;