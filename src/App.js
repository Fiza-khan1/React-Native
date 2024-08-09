// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleEqual = () => {
    try {
      setInput(eval(input)); 
    } catch (error) {
      setInput("Error");
    }
  };
  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <input type="text" className="form-control mb-3" value={input} />
              <div className="row">
                <button className="btn btn-light col-3" onClick={() => handleClick("7")}>7</button>
                <button className="btn btn-light col-3" onClick={() => handleClick("8")}>8</button>
                <button className="btn btn-light col-3" onClick={() => handleClick("9")}>9</button>
                <button className="btn btn-warning col-3" onClick={() => handleClick("/")}>/</button>
              </div>
              <div className="row mt-2">
                <button className="btn btn-light col-3" onClick={() => handleClick("4")}>4</button>
                <button className="btn btn-light col-3" onClick={() => handleClick("5")}>5</button>
                <button className="btn btn-light col-3" onClick={() => handleClick("6")}>6</button>
                <button className="btn btn-warning col-3" onClick={() => handleClick("*")}>*</button>
              </div>
              <div className="row mt-2">
                <button className="btn btn-light col-3" onClick={() => handleClick("1")}>1</button>
                <button className="btn btn-light col-3" onClick={() => handleClick("2")}>2</button>
                <button className="btn btn-light col-3" onClick={() => handleClick("3")}>3</button>
                <button className="btn btn-warning col-3" onClick={() => handleClick("-")}>-</button>
              </div>
              <div className="row mt-2">
                <button className="btn btn-light col-3" onClick={() => handleClick("0")}>0</button>
                <button className="btn btn-light col-3" onClick={() => handleClick(".")}>.</button>
                <button className="btn btn-success col-3" onClick={handleEqual}>=</button>
                <button className="btn btn-warning col-3" onClick={() => handleClick("+")}>+</button>
              </div>
              <div className="row mt-2">
                <button className="btn btn-danger col-12" onClick={handleClear}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
