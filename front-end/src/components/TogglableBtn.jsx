import { useState } from "react";

import IconBtn from "@mui/material/IconButton";

const TogglableBtn = ({ Btn1, Btn2, callback, style }) => {
    const [state, setState] = useState(false);  // state for UI changes

    const toggle = async () => {
        setState(!state);
        await callback();
    };
    
    return (
        <IconBtn 
            onClick={toggle}
            style={style}
        >
            { state ? Btn2 : Btn1 }
        </IconBtn>
    );
};

export default TogglableBtn;