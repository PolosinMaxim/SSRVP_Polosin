import React from "react";
import LabFive from "./lab5";
function LabFiveLogOut({firstName, lastName, age, logOutFunc}) {
    return (
        <>
            <p>{firstName} {lastName}, {age} лет.</p>
            <button onClick={logOutFunc}>Log out</button>
        </>
    );
}
export default LabFiveLogOut;