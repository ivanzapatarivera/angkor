import React, { Component } from "react";
import { setElementStyleProperties } from "./Adelphi/Backgrounds/setDefaultStyles";

let element = document.querySelector("#root");

class App extends Component {
  componentDidMount = () => {
    this.getDefaultStyles()
  }
  getDefaultStyles = () => {
    setElementStyleProperties();
  };
  render() {
    return <div id="welcome">Hello, welcome to my app.</div>;
  }
}

export default App;
