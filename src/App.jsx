import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HiWorld from './components/button'
import ButtonTrue from './components/button_true'
import Container from './components/container'
import MenuFucn from './components/menu'
import LabThree from './components/lab3/lab3'
import LabTwo from './components/lab2/lab2'
import React from "react"
import LabFour from './components/lab4/lab4'
import LabFour2 from './components/lab4/lab42'
import LabFour3 from './components/lab4/lab43'
import LabFive from './components/lab5/lab5'
import {BrowserRouter, Routes, Route} from 'react-router'
import { useForm } from 'react-hook-form';
import LabFiveLogOut from './components/lab5/logout'

export const ThemeContext = React.createContext('light');
export const LogicContext = React.createContext(false);
function App() {
  const [labNum, setLabNum] = useState(0)
  const [state2, setState2] = useState(0)
  
  /*useEffect(() => alert("Does it work?"))*/
  return (
    <LogicContext.Provider >
      <ThemeContext.Provider value={state2}>
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LabFour2/>} />
            <Route path="/a" element={<LabFour3/>} />
          </Routes>
        </BrowserRouter>
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <HiWorld/>
        <ButtonTrue/>
        <Container bttnSlot={<HiWorld/>}/> */}
        <MenuFucn onSelect={setLabNum}/>
        {labNum === 1 && <p>One</p>}
        {labNum === 2 && <LabTwo/>}
        {labNum === 3 && <LabThree/>}
        {labNum === 4 && <LabFour/>}
        {labNum === 5 && <LabFive/>}
        <button onClick={() => setState2((param) => param == 0 ? 1 : 0)}>
          Theme style
        </button>
        <LabFiveLogOut firstName={'Maxim'} lastName={'Polosin'} age={'21'} logOutFunc={() => console.log('Placeolder')}/>
        </>
      </ThemeContext.Provider>
    </LogicContext.Provider>
  )
}

export default App
