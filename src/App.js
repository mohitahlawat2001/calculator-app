import React, { useState } from "react";
import Button from "./components/Button";
 
function App() {
 const [display, setDisplay] = useState("0");
 const [equation, setEquation] = useState()
 return (
  <div className="App">
   <div className="calculator">
    <div className="display">{display}</div>
    <div className="buttons">
     <div className="buttonContainer">
      const button_texts_1= ["AC","+/-","%","÷"];
      for (let i = 0; i < button_texts_1.length; i++) {
       <Button text=button_texts_1[i] display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      }
     </div>
     <div className="buttonContainer">
      const button_texts_2= ["7","8","9","x"];
      for (let i = 0; i < button_texts_2.length; i++) {
       <Button text=button_texts_2[i] display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      }
     </div>
     <div className="buttonContainer">
      const button_texts_3= ["4","5","6","-"];
      for (let i = 0; i < button_texts_3.length; i++) {
       <Button text=button_texts_3[i] display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      }
     </div>
     <div className="buttonContainer">
      const button_texts_4= ["1","2","3","+"];
      for (let i = 0; i < button_texts_4.length; i++) {
       <Button text=button_texts_4[i] display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      }
     </div>
     <div className="buttonContainer">
        const button_texts_5= ["0",".","="];
      for (let i = 0; i < button_texts_5.length; i++) {
       <Button text=button_texts_1[i] display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      }
     </div>
    </div>
   </div>
  </div>
 );
}
 
export default App;
