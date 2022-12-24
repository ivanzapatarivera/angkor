import React, { Component } from "react";
import { SetTitle } from "./setTitle/setTitle";

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
      <div>
        
      </div>
    );
  }
}

export default App;
