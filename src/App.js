<<<<<<< HEAD
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Basic from "./pages/Basic"
import Graphing from "./pages/Graphing"
import Scientific from "./pages/Scientific"
import Financial from "./pages/Financial"
 
function App() {

 return (
  <div className="App">
    <BrowserRouter>
        <div>
            <Navbar />
        </div>
        <Routes> 
            <Route path="/Basic" element={<Basic />} />
            <Route path="/Graphing" element={<Graphing />} />
            <Route path="/Scientific" element={<Scientific />} />
            <Route path="/Financial" element={<Financial />} />
            <Route path="/" element={<Basic />} />
        </Routes>
    </BrowserRouter>
  </div>
 );
=======
import React, { useState } from "react";
import Button from "./components/Button";
import History from "./components/History";

function App() {
    const [display, setDisplay] = useState("0");
    const [equation, setEquation] = useState();
    const [showHistory, setShowHistory] = useState(false);

    const buttonRows = [
        ["AC", "sin", "cos", "tan"],
        ["arcsin", "arccos", "arctan", "x"],
        ["+/-", "%", "÷", "-"],
        ["7", "8", "9", "+"],
        ["4", "5", "6", "^"],
        ["1", "2", "3", "^"],
        ["0", ".", "="],
    ];

    const renderButton = (text) => (
        <Button
            key={text}
            text={text}
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
        />
    );

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    <img id="history" src="https://cdn-icons-png.flaticon.com/512/61/61122.png" width="20px" height="20px" onClick={()=>setShowHistory(true)}/>
                    {display}
                </div>
                <div className="buttons">
                    {buttonRows.map((row) => (
                        <div className="buttonContainer" key={row.join("")}>
                            {row.map(renderButton)}
                        </div>
                    ))}
                </div>
            </div>
            {showHistory && <History setShowHistory={setShowHistory} />}
        </div>
    );
>>>>>>> 565c768e74fe0cd9ac0a13021f5139bdedfc4bfb
}

export default App;
