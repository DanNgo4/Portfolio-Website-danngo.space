import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import ShowPwd from "@mui/icons-material/Visibility";
import HidePwd from "@mui/icons-material/VisibilityOff";

import { backendURL } from "../../backendURL";

import { sanitiseInput } from "../../utils/sanitiseInput";
import { toggleShowPwd } from "../../utils/toggleShowPwd";

import TogglableBtn from "../../components/TogglableBtn";
import GoogleSignIn from "../../components/GoogleSignIn";

const LogInPage = () => {
    useEffect(() => {
        document.title = "Welcome back!";
    }, []);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState("");

    const [showPwd, setShowPwd] = useState(false);

    const navigate = useNavigate();
    const logIn = async (e) => {
        e.preventDefault();
        try {
            const sanitisedUser = {
                email: sanitiseInput(email),
                pwd: sanitiseInput(pwd)
            };

            const res = await axios.post(
                `${backendURL}/api/log-in`, 
                
                sanitisedUser
            );

            signInWithEmailAndPassword(getAuth(), res.data.email, res.data.pwd)
                .then(() => {
                    navigate("/portfolio");
                })
                .catch((e) => {
                    if (e.message === "Firebase: Error (auth/invalid-credential).") {
                        e.message ="Wrong Email or Password, please try again!";
                    }
                    setError(e.message);
                    console.error("",);
                });
        } catch (e) {   
            console.error("",);
        }
    };
    
    return (
        <main className="flex justify-center py-[15vh]">
            <form onSubmit={logIn}>
                <h1 className="log-sign-h1">Welcome back!</h1>
                { error && <p className="log-sign-error">Error: {error}</p> }

                <fieldset className="log-sign-fieldset w-[85vw] md:w-auto">
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
                        className="log-sign-submit-btn mt-4"
                    />

                    <GoogleSignIn />

                    <p className="text-center">
                        Haven't had an account?&nbsp;
                        <br className="md:hidden" />

                        <Link
                            to="/sign-up"
                            className="hyperlink"
                        > 
                            Sign up here
                        </Link>
                    </p>
                </fieldset>
            </form>
        </main>
    );
};

export default LogInPage;