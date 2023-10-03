import React from "react";
import "./History.css";

const History = ({setShowHistory}) => {
  
  const history = JSON.parse(localStorage.getItem("history")) || [];

  return (
    <div className="history-container">
      <div className="history-header">
        <h2 className="history-title">Calculation History</h2>
        <button className="close-button" onClick={() => setShowHistory(false)}>
          X
        </button>
      </div>
      <ul className="history-list">
        {history.slice().reverse().map((item, index) => (
          <li key={index} className="history-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
