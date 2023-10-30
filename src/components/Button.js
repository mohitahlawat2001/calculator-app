import "../App.css";
import React from "react";

const Button = ({ text, setDisplay, display, equation, setEquation }) => {
  const handleClick = () => {
    let history = JSON.parse(localStorage.getItem('history')) || [];

    const calculateScientific = (operation) => {
      let result;
      switch (operation) {
        case "sin":
          result = Math.sin(parseFloat(display));
          break;
        case "cos":
          result = Math.cos(parseFloat(display));
          break;
        case "tan":
          result = Math.tan(parseFloat(display));
          break;
        case "arcsin":
          result = Math.asin(parseFloat(display));
          break;
        case "arccos":
          result = Math.acos(parseFloat(display));
          break;
        case "arctan":
          result = Math.atan(parseFloat(display));
          break;
        case "sqrt":
          result = Math.sqrt(parseFloat(display));
          break;
        case "log":
          result = Math.log(parseFloat(display));
          break;
        default:
          result = "";
      }

      history.push(operation + "(" + display + ") = " + result);
      if (history.length > 10) {
        history.shift();
      }

      localStorage.setItem('history', JSON.stringify(history));
      setDisplay(result.toString());
      setEquation(result.toString());
    };

    if (display === "0" && "+-x÷%+/-.".includes(text)) {
      return;
    } else if (display === "0" && text !== "AC") {
      setDisplay(text);
      setEquation(text);
    } else if ("+-x÷%+/-.".includes(text) && "+-x÷%+/-.".includes(display[display.length - 1])) {
      return;
    } else if (typeof (parseInt(display)) === "number" && typeof (text) === "number") {
      setDisplay(text);
      setEquation(text);
    } else if (text === "AC") {
      setDisplay("0");
      setEquation("");
    } else if (equation === "") {
      setEquation(text);
      setDisplay(text);
    } else if (text === "+/-") {
      let lastNumDisplay = display.split(/ [+-x÷]+ /).slice(-1);
      if (!"+-x÷".includes(lastNumDisplay)) {
        display = display.replace(new RegExp(lastNumDisplay + '$'), lastNumDisplay * -1);
        equation = equation.replace(new RegExp(lastNumDisplay + '$'), lastNumDisplay * -1);
      }
      setDisplay(display);
      setEquation(equation);
    } else if (text === "%") {
      setDisplay(display / 100);
      setEquation(equation / 100);
    } else if (text === "÷") {
      setDisplay(display + " ÷ ");
      setEquation(equation + " / ");
    } else if (text === "x") {
      setDisplay(display + " x ");
      setEquation(equation + " * ");
    } else if (text === "+") {
      setDisplay(display + " + ");
      setEquation(equation + " + ");
    } else if (text === "-") {
      setDisplay(display + " - ");
      setEquation(equation + " - ");
    } else if (text === "^") {
      setDisplay(display + " ^ ");
      setEquation(equation + " ** ");
    } else if (text === "sin") {
      calculateScientific("sin");
    } else if (text === "cos") {
      calculateScientific("cos");
    } else if (text === "tan") {
      calculateScientific("tan");
    } else if (text === "arcsin") {
      calculateScientific("arcsin");
    } else if (text === "arccos") {
      calculateScientific("arccos");
    } else if (text === "arctan") {
      calculateScientific("arctan");
    } else if (text === "sqrt") {
      calculateScientific("sqrt");
    } else if (text === "log") {
      calculateScientific("log");
    } else if (text === "LCM") {
      // Set a flag to indicate that the LCM calculation is in progress
      setDisplay(display + " LCM ");
      setEquation(equation + " LCM ");
    } else if (text === "=" && equation.includes("LCM")) {
      const numbers = equation.split(' LCM ');
      if (numbers.length === 2) {
        const num1 = parseInt(numbers[0]);
        const num2 = parseInt(numbers[1]);
        const lcm = getLCM(num1, num2);
        history.push(`${num1} LCM ${num2} = ${lcm}`);
        localStorage.setItem('history', JSON.stringify(history));
        setDisplay(lcm);
        setEquation(lcm.toString());
      } else {
        setDisplay("Invalid LCM calculation");
        setEquation("");
      }
    } else if (text === "=") {
      try {
        const result = Function(`'use strict'; return (${equation})`)();
        history.push(equation + " = " + result);
        if (history.length > 10) {
          history.shift();
        }
        localStorage.setItem('history', JSON.stringify(history));
        setDisplay(result);
        setEquation(result);
      } catch (error) {
        console.error(error);
        setDisplay("Error");
        setEquation("");
      }
    } else {
      setDisplay(display === "0" ? text : display + text);
      setEquation(equation + text);
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

function getLCM(a, b) {
  let gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return (a * b) / gcd(a, b);
}
