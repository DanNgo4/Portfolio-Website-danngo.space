import { useNavigate } from "react-router-dom";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Divider } from "@mui/material";

import GoogleLogo0 from "../media/logos/GoogleLogo0.png";

const GoogleSignIn = () => {
    const navigate = useNavigate();

    const googleSignIn = async () => {
        try {
            const cred = await signInWithPopup(getAuth(), new GoogleAuthProvider());
            // checks if not new user
            if (cred.user.metadata.createdAt < cred.user.metadata.lastLoginAt) {
                navigate("/portfolio");
            } else {
                navigate("/google-sign-in-success");
            }
        }
        catch (e) {
            navigate("/google-sign-in-fail");
            console.error("Error signing in with Google",);
        }
    };
    
    return (
        <>
            <Divider style={{
                width: "100%",
                marginTop: "0.5rem",
                marginBottom: "0.5rem"
            }}>
                Or
            </Divider>

            <section className="flex flex-row justify-center items-center mb-6 log-sign-submit-btn" onClick={googleSignIn} >
                <img 
                    src={GoogleLogo0}
                    className="mr-3 h-[100%]"
                />

                <p>
                    Continue with Google
                </p>
            </section>
        </>
        
    );
};

export default GoogleSignIn;