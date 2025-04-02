import React, {useContext} from "react";
import {styled} from "@mui/material/styles";
import { Paper } from "@mui/material";
import Switch from "@mui/material/Switch";
import AboutSelf from "./self";

function Header() {
    const [checked, setChecked] = React.useState(true);
    
    return (
        <>
            <Switch checked={checked} onChange={() => setChecked((param) => param == true ? false : true)}/>
            {checked && <AboutSelf/>}
            
        </>
    );
}
export default Header;