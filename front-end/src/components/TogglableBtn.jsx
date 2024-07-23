import IconBtn from "@mui/material/IconButton";

const TogglableBtn = ({ Btn1, Btn2, state, setState, callback, style }) => {

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