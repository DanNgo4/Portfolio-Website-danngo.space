import sanitizeHtml from "sanitize-html";

export const signUpRoute = {
    path: "/api/sign-up",
    method: "post",
    handler: async (req, res) => {
        const { email, pwd, confirmPwd } = req.body;

        if (!email || typeof email !== "string") {
            return res.status(422).send("Bad Request: Email is required as a string");
        }

        if (!pwd || typeof pwd !== "string") {
            return res.status(422).send("Bad Request: Password is required as a string");
        }

        if (!confirmPwd || typeof confirmPwd !== "string") {
            return res.status(422).send("Bad Request: Confirm Password is required as a string");
        }

        if (!(
            (pwd.length > 7) && 
            (/[a-z]/.test(pwd)) && 
            (/[A-Z]/.test(pwd)) && 
            (/\d/.test(pwd)) &&
            (/[^A-Za-z0-9]/.test(pwd))
        )) {
            return res.status(422).send("Bad Request: Password needs to satisfy all requirements");
        }

        const sanitisedEmail = sanitizeHtml(email);
        const sanitisedPwd = sanitizeHtml(pwd);

        try {
            res.status(200).json({
                email: sanitisedEmail,
                pwd: sanitisedPwd,
            });
        } catch (e) {
            res.status(500).send("Internal Server Error: An error occurred while signing up");
        }
    }
};

export const logInRoute =  {
    path: "/api/log-in",
    method: "post",
    handler: async (req, res) => {
        const { email, pwd } = req.body;

        if (!email || typeof email !== "string") {
            return res.status(422).send("Bad Request: Email is required as a string");
        }

        if (!pwd || typeof pwd !== "string") {
            return res.status(422).send("Bad Request: Password is required as a string");
        }

        const sanitisedEmail = sanitizeHtml(email);
        const sanitisedPwd = sanitizeHtml(pwd); 

        try {
            res.status(200).json({ 
                email: sanitisedEmail, 
                pwd: sanitisedPwd
            });
        } catch (e) {
            res.status(500).send("Internal Server Error: An error occurred while logging in");
        }
    }
};