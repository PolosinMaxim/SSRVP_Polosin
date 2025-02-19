import React from "react";
function BtnFnc() {alert("Does it work?");}
function ButtonTrue() {
    return <button onClick={BtnFnc}>Button text</button>
}
export default ButtonTrue;