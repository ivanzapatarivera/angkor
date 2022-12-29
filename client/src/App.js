import React, { Component } from "react";
import { SetTitle } from "./setTitle/setTitle";
import SetWelcomeLetter from "./setWelcomeLetter/setWelcomeLetter";

import "./App.css";

class App extends Component {
  componentDidMount = () => {
    let title = this.setTitle();
    this.changeTitle(title);
  };

  setTitle = () => {
    let title = new SetTitle().returnTitle();
    return title;
  };

  changeTitle = (title) => {
    document.title = title;
    return;
  };

  render() {
    return (
      <div className="flex-center outer-box">
        <div className="border border-top"></div>
        <div className="contents">
          <SetWelcomeLetter />
        </div>
        <div className="border border-bottom"></div>
      </div>
    );
  }
}

export default App;
