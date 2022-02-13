import React, { Component } from "react";
import { setBackgroundColor } from "./Adelphi/Backgrounds/setDefaultStyles";

let element = document.querySelector("#root");

class App extends Component {
  getDefaultStyles = () => {
    setBackgroundColor(element);
  };
  render() {
    this.getDefaultStyles();
    return <div>Hello, welcome to my app.</div>;
  }
}

export default App;
