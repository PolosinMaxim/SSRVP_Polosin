import React, {useContext} from "react";
import { Paper } from "@mui/material";

function AboutSelf() {

    return (
        <Paper elevation={2} style={{margin:10, padding:10}}>
            <p>Лабораторные работы по предмету "Современные средства разработки Web-приложений". Полосин Максим Алексеевич</p>
        </Paper>
    );
}
export default AboutSelf;