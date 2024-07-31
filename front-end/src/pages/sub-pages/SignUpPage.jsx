import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import ShowPwd from "@mui/icons-material/Visibility";
import HidePwd from "@mui/icons-material/VisibilityOff";

import { backendURL } from "../../backendURL";

import { sanitiseInput } from "../../utils/sanitiseInput";
import { toggleShowPwd } from "../../utils/toggleShowPwd";

import TogglableBtn from "../../components/TogglableBtn";

const SignUpPage = () => {
    useEffect(() => {
        document.title = "Welcome to my Web App!";
    }, []);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [error, setError] = useState("");

    const [showPwd, setShowPwd] = useState(false);
    const [showConfirmPwd, setShowConfirmPwd] = useState(false);

    const navigate = useNavigate();
    const signUp = async (e) => {
        e.preventDefault();
        try {
            if (pwd !== confirmPwd) {
                setError("Password mismatch");
                return;
            }

            const sanitisedUser = {
                email: sanitiseInput(email),
                pwd: sanitiseInput(pwd),
                confirmPwd: sanitiseInput(confirmPwd)
            };

            const res = await axios.post(
                `${backendURL}/api/sign-up`,

                sanitisedUser
            );

            createUserWithEmailAndPassword(getAuth(), res.data.email, res.data.pwd)
                .then(() => {
                    navigate("/portfolio");
                })
                .catch((e) => {
                    setError(e.message);
                    console.error("",)
                });
        } catch (e) {   
            console.error("",);
        }
    };
    
    return (
        <main className="flex justify-center py-[15vh]">
            <form onSubmit={signUp}>
                <h1 className="log-sign-h1">Welcome to my Web App!</h1>
                { error && <p className="log-sign-error">Error: {error}</p> }

                <fieldset className="log-sign-fieldset">
                    <p className="log-sign-input-row">
                        <label htmlFor="signUpEmail">
                            Email
                        </label>

                        <input 
                            id="signUpEmail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            required
                            placeholder="Your email address"
                            className="log-sign-input-box"
                        />
                    </p>

                    <section className="log-sign-input-row">
                        <label htmlFor="signUpPwd">
                            Password
                        </label>

                        <div className="pwd-container">
                            <input 
                                id="signUpPwd"
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                                type="password"
                                required
                                placeholder="Your password"
                                className="log-sign-input-box"
                            />

                            <TogglableBtn
                                Btn1={<ShowPwd />}
                                Btn2={<HidePwd />}
                                state={showPwd}
                                setState={setShowPwd}
                                callback={() => toggleShowPwd("signUpPwd", showPwd, setShowPwd)}
                                style={{
                                    position: "absolute",
                                    right: "0.25rem",
                                    zIndex: 1,
                                }}
                            />
                        </div>
                    </section>

                    <section className="log-sign-input-row">
                        <label htmlFor="confirmPwd">
                            Confirm Password
                        </label>

                        <div className="pwd-container">
                            <input 
                                id="confirmPwd"
                                value={confirmPwd}
                                onChange={e => setConfirmPwd(e.target.value)}
                                type="password"
                                required
                                placeholder="Confirm password"
                                className="log-sign-input-box"
                            />

                            <TogglableBtn
                                Btn1={<ShowPwd />}
                                Btn2={<HidePwd />}
                                state={showConfirmPwd}
                                setState={setShowConfirmPwd}
                                callback={() => toggleShowPwd("confirmPwd", showConfirmPwd, setShowConfirmPwd)}
                                style={{
                                    position: "absolute",
                                    right: "0.25rem",
                                    zIndex: 1,
                                }}
                            />
                        </div>
                    </section>

                    <input 
                        type="submit"
                        value="Sign Up"
                        disabled={!email || !pwd || !confirmPwd }
                        className="p-4 log-sign-submit-btn"
                    />

                    <p className="text-center">
                        Already had an account?&nbsp;
                        <br className="md:hidden" />
                        
                        <Link
                            to="/log-in"
                            className="hyperlink"
                        > 
                            Log in here
                        </Link>
                    </p>
                </fieldset>
            </form>
        </main>
    );
};

export default SignUpPage;