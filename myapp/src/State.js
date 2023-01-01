import React, { Component } from "react";
import "./State.css";
export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  ReInitialize = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>

        <div className="buttonalign">
          <button
            onClick={this.handleIncrement}
            disabled={count === 10 ? true : false}
          >
            +
          </button>
          <button
            onClick={this.handleDecrement}
            disabled={count === -10 ? true : false}
          >
            -
          </button>
          <button onClick={this.ReInitialize}>ReInitialize</button>
        </div>
      </div>
    );
  }
}
