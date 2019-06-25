import React, { Component } from "react";
import "./Calculator.css";
import Display from "../Display/Display";

class Calculator extends Component {
  state = {
    // Value in <Display />
    displayValue: "0",

    // Values for number <Keys />
    numbers: [],

    // Values for operator <Keys />
    operators: [],

    // User-selected operator
    selectedOperator: "",

    // Stored value for math operation
    storedValue: ""
  };

  callOperator = () => {
    console.log("callOperator()");
  };

  setOperator = () => {
    console.log("setOperator()");
  };

  updateDisplay = () => {
    console.log("updateDisplay()");
  };

  render = () => {
    const { displayValue } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
      </div>
    );
  };
}

export default Calculator;
