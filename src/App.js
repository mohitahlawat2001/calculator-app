import React, { useState } from "react";
import Button from "./components/Button";

function App() {
    const [display, setDisplay] = useState("0");
    const [equation, setEquation] = useState();

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
                <div className="display">{display}</div>
                <div className="buttons">
                    {buttonRows.map((row) => (
                        <div className="buttonContainer" key={row.join("")}>
                            {row.map(renderButton)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
