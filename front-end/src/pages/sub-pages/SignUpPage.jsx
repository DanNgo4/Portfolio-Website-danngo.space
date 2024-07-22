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
        <main className="flex justify-center py-[20vh]">
            <form onSubmit={signUp}>
                <h1 className="text-center font-bold text-4xl mb-6">Welcome to my Web App!</h1>
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

                    <section className="grid grid-cols-2 my-2">
                        <label htmlFor="confirmPwd">
                            Confirm Password
                        </label>

                        <div className="relative flex items-center">
                            <input 
                                id="confirmPwd"
                                value={confirmPwd}
                                onChange={e => setConfirmPwd(e.target.value)}
                                type="password"
                                required
                                placeholder="Confirm password"
                                className="border border-solid rounded border-black pl-3"
                            />

                            <TogglableBtn
                                Btn1={<ShowPwd />}
                                Btn2={<HidePwd />}
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
                        className="my-4 rounded-2xl bg-gray-300 p-4 md:hover:bg-[var(--apple-white)] md:duration-500"
                    />

                    <p>
                        Already had an account?&nbsp;
                        <HashLink
                            smooth
                            to="/log-in"
                            className="underline text-blue-500 hover:bg-[var(--article-bg)]"
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