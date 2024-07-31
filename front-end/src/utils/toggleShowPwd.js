export const toggleShowPwd = (elementID, state, setState) => {
    setState(!state);
    document.getElementById(elementID).type = state ? "password" : "text";
};