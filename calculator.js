import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      displayValue:
        prevState.displayValue === '0' ? String(value) : prevState.displayValue + value,
    }));
  };

  handleClear = () => {
    this.setState({ displayValue: '0' });
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.displayValue);
      this.setState({ displayValue: result });
    } catch (error) {
      this.setState({ displayValue: 'Error' });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick(1)}>1</button>
          <button onClick={() => this.handleButtonClick(2)}>2</button>
          {/* Add buttons for other digits */}
          <button onClick={this.handleClear}>C</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
          {/* Add buttons for other operators */}
          <button onClick={this.handleCalculate}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
