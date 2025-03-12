import React from "react";
function BtnFnc() {alert("Does it work?");}
function MenuFucn({onSelect}) {
    return <div>
        <button onClick={() => onSelect(1)}>Lab1?</button>
        <button onClick={() => onSelect(2)}>Lab2</button>
        <button onClick={() => onSelect(3)}>Button text 3</button>
        <button onClick={() => onSelect(4)}>Lab4</button>
    </div>
}
export default MenuFucn;