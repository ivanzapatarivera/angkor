import React, { Component } from "react";
import setBackgroundColor from "./Adelphi/Backgrounds/getDefaultBackgroundColor";

let element = document.querySelector("#root")

class App extends Component {
  getRootElement = () => {
    setBackgroundColor(element);
  }
  render() {
    this.getRootElement();
    return <div>Hello, welcome to my app.</div>;
  }
}

export default App;
