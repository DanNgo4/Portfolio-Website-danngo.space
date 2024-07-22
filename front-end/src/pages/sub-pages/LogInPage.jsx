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

    const [showPwd, setShowPwd] = useState(false);

    const [error, setError] = useState("");

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
            if (e.message = "Firebase: Error (auth/invalid-credential).") {
                e.message ="Wrong Email or Password, please try again!"
            }
            setError(e.message);
        }
    };
    
    return (
        <main className="flex justify-center items-center py-[20vh]">
            <form onSubmit={logIn}>
                <h1 className="text-center font-bold text-4xl mb-12">Welcome back!</h1>
                { error && <p className="mb-6 text-red-500 text-center">Error: {error}</p> }

                <fieldset className="flex flex-col items-center border-[3px] border-solid rounded border-[var(--apple-black)] p-8">
                    <p className="grid grid-cols-2 my-2">
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
                            className="border border-solid rounded border-black pl-3"
                        />
                    </p>

                    <section className="grid grid-cols-2 my-2">
                        <label htmlFor="signUpPwd">
                            Password
                        </label>

                        <div className="relative flex items-center">
                            <input 
                                id="signUpPwd"
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                                type="password"
                                required
                                placeholder="Your password"
                                className="border border-solid rounded border-black pl-3"
                            />

                            <TogglableBtn
                                Btn1={<ShowPwd />}
                                Btn2={<HidePwd />}
                                callback={() => toggleShowPwd("signUpPwd", showPwd, setShowPwd)}
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
                        className="my-4 rounded-2xl bg-gray-300 p-3 md:hover:bg-[var(--apple-white)] md:duration-500"
                    />

                    <p>
                        Haven't had an account?&nbsp;
                        <HashLink
                            smooth
                            to="/log-in"
                            className="underline text-blue-500 hover:bg-[var(--article-bg)]"
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