import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAuth, applyActionCode } from "firebase/auth";

const CheckEmailVerificationPage = () => {
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let oobCode = searchParams.get("oobCode");

        if (oobCode) {
            const auth = getAuth();
            applyActionCode(auth, oobCode)
                .then(() => {
                    navigate("/verify-email-success");
                })
                .catch((error) => {
                    console.error("Error verifying email:", error);
                    setError("Failed to verify email. Please try again.");
                });
        } else {
            setError("Invalid verification link.");
            navigate("/verify-email-fail");
        }

        // cleanup function
        return () => {
            oobCode = null
        }
    }, [navigate, searchParams]);

    return (
        <main className="email-verify-main">
            <h1 className="email-verify-h1">Email Verification</h1>
            { error 
                ? <p className="email-verify-p text-red-500">{error}</p>
                : <p className="email-verify-p">Verifying your email...</p>
            }
        </main>
    );
};

export default CheckEmailVerificationPage;
