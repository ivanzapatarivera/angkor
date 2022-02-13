import React, { Component } from "react";
import { setElementStyleProperties } from "./Adelphi/Backgrounds/setDefaultStyles";

let element = document.querySelector("#root");

class App extends Component {
  componentDidMount = () => {
    this.getDefaultStyles();
  };
  getDefaultStyles = () => {
    setElementStyleProperties();
  };
  render() {
    return (
      <div>
        <div id="welcome">Hello, welcome to my app.</div>
        <div id="message">Let's take a journey together</div>
        
      </div>
    );
  }
}

export default App;
