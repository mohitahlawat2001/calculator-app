import React, { useState } from "react";

function LCMCalculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [lcmResult, setLCMResult] = useState("");

  const calculateLCM = () => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setLCMResult("Please enter valid numbers.");
    } else {
      const lcm = getLCM(num1, num2);
      setLCMResult(`LCM of ${num1} and ${num2} is ${lcm}.`);
    }
  };

  const getLCM = (a, b) => {
    return (a * b) / getGCD(a, b);
  };

  const getGCD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return getGCD(b, a % b);
  };

  return (
    <div className="calculator">
      <h2>LCM Calculator</h2>
      <input
        type="number"
        placeholder="Enter the first number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      /><br/>
      <input
        type="number"
        placeholder="Enter the second number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <br />
      <br/>
      <button onClick={calculateLCM}>Calculate LCM</button>
      <p>{lcmResult}</p>
    </div>
  );
}

export default LCMCalculator;
