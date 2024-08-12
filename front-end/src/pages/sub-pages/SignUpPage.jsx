import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

import ShowPwd from "@mui/icons-material/Visibility";
import HidePwd from "@mui/icons-material/VisibilityOff";
import UnChecked from "@mui/icons-material/Close";
import Checked from "@mui/icons-material/Check";

import { backendURL } from "../../backendURL";

import { sanitiseInput } from "../../utils/sanitiseInput";
import { toggleShowPwd } from "../../utils/toggleShowPwd";

import TogglableBtn from "../../components/TogglableBtn";
import GoogleSignIn from "../../components/GoogleSignIn";

const setStyle = (state) => {
    return state ? "text-green-500" : "text-red-500";
};

const CheckIcon = ({ state }) => {
    return state ? <Checked className="text-green-500 mb-[0.125rem]" /> : <UnChecked className="text-red-500 mb-[0.125rem]" />;
};

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

    const [charNum, setCharNum] = useState(0);
    const [lowercase, setLowerCase] = useState(false);
    const [uppercase, setUpperCase] = useState(false);
    const [num, setNum] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);

    useEffect(() => {
        checkPwd(pwd);
    }, [pwd]);

    const checkPwd = (pwd) => {
        setCharNum(pwd.length > 7);
        setLowerCase(/[a-z]/.test(pwd));
        setUpperCase(/[A-Z]/.test(pwd));
        setNum(/\d/.test(pwd));
        setSpecialChar(/[^A-Za-z0-9]/.test(pwd));
    };

    const isPwdValid = () => {
        return charNum && lowercase && uppercase && num && specialChar;
    };

    const navigate = useNavigate();
    const signUp = async (e) => {
        e.preventDefault();
        if (pwd !== confirmPwd) {
            setError("Password mismatch");
            return;
        }

        const sanitisedUser = {
            email: sanitiseInput(email),
            pwd: sanitiseInput(pwd),
            confirmPwd: sanitiseInput(confirmPwd)
        };

        try {
            const res = await axios.post(
            `${backendURL}/api/sign-up`,

            sanitisedUser
            );

            const newUserCred = await createUserWithEmailAndPassword(getAuth(), res.data.email, res.data.pwd);
            await sendEmailVerification(newUserCred.user);

            navigate("/verify-email-landing");
        } catch (e) {
            if (e.message === "Firebase: Error (auth/email-already-in-use).") {
                e.message =" An account has already used this email, please try a different one!";
            }
            setError(e.message);
            console.error("", e);
        }
    };
    
    return (
        <main className="flex justify-center py-[5vh]">
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

                    <p className="mt-4 font-semibold">Password Requirements:</p>
                    <ul className="list-disc text-left">
                        <li className={setStyle(charNum)}>
                            At least 8 characters 
                            <CheckIcon state={charNum} />
                        </li>

                        <li className={setStyle(lowercase)}>
                            Contains lowercase letter
                            <CheckIcon state={lowercase} />
                        </li>

                        <li className={setStyle(uppercase)}>
                            Contains uppercase letter
                            <CheckIcon state={uppercase} />
                        </li>

                        <li className={setStyle(num)}>
                            Contains number
                            <CheckIcon state={num} />
                        </li>

                        <li className={setStyle(specialChar)}>
                            Contains special character
                            <CheckIcon state={specialChar} />
                        </li>
                    </ul>

                    <input 
                        type="submit"
                        value="Sign Up"
                        disabled={!email || !pwd || !confirmPwd || !isPwdValid() }
                        className="log-sign-submit-btn"
                    />
                    
                    <GoogleSignIn />

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