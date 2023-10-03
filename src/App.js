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
 }
export default App;
