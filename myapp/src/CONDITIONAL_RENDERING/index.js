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
    if (this.state.isLoggedIn) {
      return <HomePage />;
    } else {
      return <Login />;
    }
    // return <div>hi</div>;
  }
}
