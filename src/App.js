import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [varr, setVarr] = useState(0);

  const increment = () => {
    setVarr(varr + 1);
  };
  const decrement = () => {
    setVarr(varr - 1);
  };

  return (
    <div className="container">
      <h1>Count: {varr}</h1>
      <button className="custom-btn-incr" onClick={increment}>
        Increment
      </button>
      <button className="custom-btn-decr" onClick={decrement}>
        Decrement
      </button>

      {
        // Calls increment function when clicked
      }
    </div>
  );
}

export default Counter;
