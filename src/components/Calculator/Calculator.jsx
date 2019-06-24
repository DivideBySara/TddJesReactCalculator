import React, { Component } from "react";

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
    return <div className="calculator-container" />;
  };
}

export default Calculator;
