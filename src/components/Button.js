import "../App.css";
 
const Button = ({ text, setDisplay, display, equation, setEquation }) => {
   const handleClick = () => {
    if (display === "0" && "+-x÷%+/-.".includes(text)) { // if the display is 0 and the button is an operator, don't add the operator
        return
    } 
    else if ("+-x÷%+/-.".includes(text) && "+-x÷%+/-.".includes(display[display.length - 1])) { // if the last character is an operator, don't add another operator
        return
      }
     else{
      setDisplay(parseInt(display))
      setEquation(parseInt(display))
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
