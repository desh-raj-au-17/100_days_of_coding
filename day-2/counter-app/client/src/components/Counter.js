import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  // useState hook
  let [counter, setCounter] = useState(0);

  //substraction handler
  const subHandler = () => {
    setCounter(counter - 1);
    console.log("clicked");
  };

  //reset handler
  const resetHandler = () => {
    setCounter((counter = 0));

    console.log("clicked");
  };

  // adition handler
  const addHandler = () => {
    setCounter(counter + 1);
    console.log("clicked");
  };

  return (
    <div className="container">
      <div className="counter-div">
        <h1 className="heading">Counter App</h1>
        <span className="count">{counter} </span>
        <hr />
        <div className="buttons">
          <button onClick={subHandler} className="subtract">
            <i className="fas fa-long-arrow-alt-down subtract"></i>
            Subtract
          </button>
          <button onClick={resetHandler} className="reset">
            <i className="fas fa-spinner reset"></i>
            Reset
          </button>
          <button onClick={addHandler} className="add">
            <i className="fas fa-long-arrow-alt-up add"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
