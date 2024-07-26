import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import ShowPwd from "@mui/icons-material/Visibility";
import HidePwd from "@mui/icons-material/VisibilityOff";

import TogglableBtn from "../../components/TogglableBtn";

const LogInPage = () => {
    useEffect(() => {
        document.title = "Welcome back!";
    }, []);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const [error, setError] = useState("");

    const [showPwd, setShowPwd] = useState(false);
    const toggleShowPwd = (elementID, state, setState) => {
        setState(!state);
        document.getElementById(elementID).type = state ? "password" : "text";
    };

    const navigate = useNavigate();
    const logIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(getAuth(), email, pwd);
            navigate("/portfolio");
        } catch (e) {   
            if (e.message === "Firebase: Error (auth/invalid-credential).") {
                e.message ="Wrong Email or Password, please try again!"
            }
            setError(e.message);
        }
    };
    
    return (
        <main className="flex justify-center items-center py-[15vh] px-[10vw] md:px-0">
            <form onSubmit={logIn}>
                <h1 className="log-sign-h1">Welcome back!</h1>
                { error && <p className="log-sign-error">Error: {error}</p> }

                <fieldset className="log-sign-fieldset">
                    <p className="log-sign-input-row">
                        <label htmlFor="logInEmail">
                            Email
                        </label>

                        <input 
                            id="logInEmail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            required
                            placeholder="Your email address"
                            className="log-sign-input-box"
                        />
                    </p>

                    <section className="log-sign-input-row">
                        <label htmlFor="logInPwd">
                            Password
                        </label>

                        <div className="pwd-container">
                            <input 
                                id="logInPwd"
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
                                callback={() => toggleShowPwd("logInPwd", showPwd, setShowPwd)}
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
                        value="Log In"
                        disabled={!email || !pwd}
                        className="p-3 log-sign-submit-btn"
                    />

                    <p className="text-center">
                        Haven't had an account?&nbsp;
                        <br className="md:hidden" />

                        <HashLink
                            smooth
                            to="/sign-up"
                            className="hyperlink"
                        > 
                            Sign up here
                        </HashLink>
                    </p>
                </fieldset>
            </form>
        </main>
    );
};

export default LogInPage;