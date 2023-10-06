import "../App.css";

const Button = ({ text, setDisplay, display, equation, setEquation }) => {
  const handleClick = () => {
  let history = JSON.parse(localStorage.getItem('history')) || [];



    const calculateTrigonometric = (operation) => {
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
        default:
          result = "";
      }
      history.push(operation + "(" + display + ") = " + result);
      if(history.length > 10){
          history.shift();
      }
      localStorage.setItem('history', JSON.stringify(history));
      setDisplay(result.toString());
      setEquation(result.toString());
    };


    if (display === "0" && "+-x÷%+/-.".includes(text)) { // if the display is 0 and the button is an operator, don't add the operator
      return
    } else if (display === "0" && text !== "AC") {
      setDisplay(text);
      setEquation(text);
    } else if ("+-x÷%+/-.".includes(text) && "+-x÷%+/-.".includes(display[display.length - 1])) { // if the last character is an operator, don't add another operator
      return
    } else if (typeof (parseInt(display)) === "number" && typeof (text) === "number") { // if the last character is a number, don't add another number
      setDisplay(text)
      setEquation(text)
    } else if (text === "AC") {
      setDisplay("0");
      setEquation("");
    } else if (equation == "") {
      setEquation(text);
      setDisplay(text);
    } else if (text === "+/-") {
      // Get the last number 
      let lastNumDisplay = display.split(/ [+-x÷]+ /).slice(-1)

      // Check if the last char is a number not operator
      // After that toggle the last number to negative or positive
      if (!"+-x÷".includes(lastNumDisplay)) {
        display = display.replace(new RegExp(lastNumDisplay + '$'), lastNumDisplay * -1)
        equation = equation.replace(new RegExp(lastNumDisplay + '$'), lastNumDisplay * -1)
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
      setEquation(equation + " ** "); // Added the power functionality
    } else if (text === "sin") {
      calculateTrigonometric("sin");
    }else if (text === "cos") {
      calculateTrigonometric("cos");
    }else if (text === "tan") {
      calculateTrigonometric("tan");
    }
    else if (text === "arcsin") {
      calculateTrigonometric("arcsin");
    }
    else if (text === "arccos") {
      calculateTrigonometric("arccos");
    }
    else if (text === "arctan") {
      calculateTrigonometric("arctan");
    }
    else if (text === "=") {
      try {
        const result = Function(`'use strict'; return (${equation})`)();
        if (!isFinite(result)){
          throw new Error("Cannot divide by zero")
        }
        history.push(equation + " = " + result);
        if(history.length > 10){
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

  }

  return (
    <button className="button"
      onClick={handleClick}
    >{text}</button>
  );
}

export default Button;
