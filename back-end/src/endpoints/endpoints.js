import { getProjectRoute } from "./routes/getProjectRoute.js";
import { incrementProjectUpvoteRoute, decrementProjectUpvoteRoute } from "./routes/updateProjectUpvoteRoute.js";
import { postProjectCommentRoute } from "./routes/postProjectCommentRoute.js";

export const getProjectEndpoint = (
    getProjectRoute
);

export const endpoints = [
    incrementProjectUpvoteRoute,
    decrementProjectUpvoteRoute,
    postProjectCommentRoute,
];