import React, { useState } from "react";
import Button from "./components/Button";
import History from "./components/History";
function App() {
    const [display, setDisplay] = useState("0");
    const [equation, setEquation] = useState();
    const [showHistory, setShowHistory] = useState(false);

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    <img id="history" src="https://cdn-icons-png.flaticon.com/512/61/61122.png" width="20px" height="20px" onClick={()=>setShowHistory(true)}/>
                    {display}
                </div>
                <div className="buttons">
                    <div className="buttonContainer">
                        <Button text="AC" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="+/-" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="%" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="÷" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                    </div>
                    <div className="buttonContainer">
                        <Button text="7" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="8" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="9" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="x" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                    </div>
                    <div className="buttonContainer">
                        <Button text="4" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="5" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="6" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="-" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                    </div>
                    <div className="buttonContainer">
                        <Button text="1" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="2" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="3" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="+" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                    </div>
                    <div className="buttonContainer">
                        <Button text="0" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="." display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="=" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
                        <Button text="^" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} /> {/* Added the power button */}
                    </div>
                </div>
            </div>
            {showHistory && <History setShowHistory={setShowHistory} />}
        </div>
    );
}

export default App;