import React, {useContext} from "react";
import { ThemeContext } from "../../App";
function KakoeNibud() {

}
function LabFour() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={{background: theme == 0 && "red", color: theme == 1 && "red"}}>
                I'm stilised with the context theme!
            </button>
        </div>
    );
}
export default LabFour;