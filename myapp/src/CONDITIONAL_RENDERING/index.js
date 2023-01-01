import React, { Component } from "react";
import HomePage from "./HomePage";
import Login from "./Login";

export default class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return <div>{isLoggedIn && <HomePage />}</div>;
  }
}
