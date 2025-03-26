import React, {useContext, useState} from "react";
import { LogicContext } from "../../App";

function LogState({children, content}) {
    const theme = useContext(LogicContext);
    const [state, setLogState] = useState(0);
    return (
        <LogicContext.Provider value={{state, setLogState}}>
            {state === 0 && children}
            {state === 1 && content}
        </LogicContext.Provider>
    );
}
export default LogState;