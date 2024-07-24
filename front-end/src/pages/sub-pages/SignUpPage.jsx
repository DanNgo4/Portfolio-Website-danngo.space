import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import ShowPwd from "@mui/icons-material/Visibility";
import HidePwd from "@mui/icons-material/VisibilityOff";

import TogglableBtn from "../../components/TogglableBtn";

const SignUpPage = () => {
    useEffect(() => {
        document.title = "Welcome to my Web App!";
    }, []);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const [showPwd, setShowPwd] = useState(false);
    const [showConfirmPwd, setShowConfirmPwd] = useState(false);

    const [error, setError] = useState("");

    const toggleShowPwd = (elementID, state, setState) => {
        setState(!state);
        document.getElementById(elementID).type = state ? "password" : "text";
    };

    const navigate = useNavigate();
    const signUp = async (e) => {
        e.preventDefault();
        try {
            if (pwd !== confirmPwd) {
                setError("Password mismatch");
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, pwd);
            navigate("/portfolio");
        } catch (e) {   
            setError(e.message);
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

                    <p>
                        Already had an account?&nbsp;
                        <HashLink
                            smooth
                            to="/log-in"
                            className="hyperlink"
                        > 
                            Log in here
                        </HashLink>
                    </p>
                </fieldset>
            </form>
        </main>
    );
};

export default SignUpPage;