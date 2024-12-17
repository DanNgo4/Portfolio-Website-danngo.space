import { signUpRoute, logInRoute } from "./routes/logSignRoute.js";
import { getProjectRoute } from "./routes/getProjectRoute.js";
import { incrementProjectUpvoteRoute, decrementProjectUpvoteRoute } from "./routes/updateProjectUpvoteRoute.js";
import { postProjectCommentRoute } from "./routes/postProjectCommentRoute.js";

export const endpoints0 = [
    signUpRoute,
    logInRoute
];

export const getProjectEndpoint = (
    getProjectRoute
);

export const endpoints1 = [
    incrementProjectUpvoteRoute,
    decrementProjectUpvoteRoute,
    postProjectCommentRoute,
];