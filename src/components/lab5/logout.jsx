import React, {useContext} from "react";
import LabFive from "./lab5";
import { LogicContext } from "../../App";

function LabFiveLogOut({firstName, lastName, age, logOutFunc}) {
    const {setLogState} = useContext(LogicContext);
    return (
        <>
            <p>{firstName} {lastName}, {age} лет.</p>
            <button onClick={() => setLogState((param) => param == 0 ? 1 : 0)}>Log out</button>
        </>
    );
}
export default LabFiveLogOut;