import React, { Component } from "react";
import HomePage from "./HomePage";
import Login from "./Login";

export default class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return <div>{isLoggedIn ? <HomePage /> : <Login />}</div>;
  }
}
