import React, { useState, useEffect, useRef } from "react";
import Button from "./components/Button";
import History from "./components/History";

function App() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState();
  const [showHistory, setShowHistory] = useState(false);
  const displayRef = useRef(null);

  const buttonRows = [
    ["AC", "sin", "cos", "tan"],
    ["arcsin", "arccos", "arctan", "x"],
    ["+/-", "%", "÷", "-"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "^"],
    ["1", "2", "3", "^"],
    ["0", ".", "="],
  ];

  useEffect(() => {
    displayRef.current.scrollLeft = displayRef.current.scrollWidth;
  }, [display]);

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
        <div className="display" ref={displayRef}>
          <img
            id="history"
            src="https://cdn-icons-png.flaticon.com/512/61/61122.png"
            width="20px"
            height="20px"
            onClick={() => setShowHistory(true)}
          />
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
}

export default App;
