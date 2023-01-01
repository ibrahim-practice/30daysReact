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
    let element;
    element = isLoggedIn ? <HomePage /> : <Login />;
    return <div>{element}</div>;
  }
}
