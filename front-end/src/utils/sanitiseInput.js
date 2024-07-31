import DOMPurify from "dompurify";

export const sanitiseInput = (input) => DOMPurify.sanitize(input);