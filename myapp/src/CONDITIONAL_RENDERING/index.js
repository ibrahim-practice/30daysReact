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
    if (isLoggedIn) {
      element = <HomePage />;
    } else {
      element = <Login />;
    }
    return <div>{element}</div>;
  }
}
