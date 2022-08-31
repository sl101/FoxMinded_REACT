import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }));
  };

  render() {
    return (
      <div className="counterView">
        <h2 className="title">Class Counter</h2>
        <button className="button" onClick={this.increment} type="button">
          Increment
        </button>

        <div className="counterField">Counter = {this.state.number}</div>
        <button className="button" onClick={this.decrement} type="button">
          Decrement
        </button>
      </div>
    );
  }
}

export default ClassCounter;
