import React, { Component } from "react";
import { setElementStyleProperties } from "./Adelphi/Backgrounds/setDefaultStyles";
import { listOfAppElements } from "./Railway/getAppElements";

class App extends Component {
  componentDidMount = () => {
    this.getDefaultStyles();
  };
  getDefaultStyles = () => {
    setElementStyleProperties(listOfAppElements);
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
