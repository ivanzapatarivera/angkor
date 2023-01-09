import React, { Component } from "react";
import { SetTitle } from "./Title/Title";
import SetWelcomeLetter from "./setWelcomeLetter/setWelcomeLetter";

import "./App.css";
import FirstPost from "./setFirstPost/firstPost";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

const firstPost = "first-post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "welcome",
    };
    this.returnComponent = this.returnComponent.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount = () => {
    let title = this.handleChangeTitle();
    this.handleChangeTitle(title);
    this.handleShortcutButton();
  };

  handleChangeTitle(title) {
    document.title = title;
    return;
  }

  handleState(pageName) {
    this.setState({
      page: pageName,
    });
    return;
  }

  handleShortcutButton() {
    var page = this.state.page;
    const btn = document.getElementById(page);
    if (btn) {
      btn.addEventListener("click", () => {
        btn.style.visibility = "hidden";
        this.handleState(page);
      });
    }
  }

  returnComponent() {
    var page = this.state.page;
    if (page === "welcome") return <SetWelcomeLetter />;
    if (page === "first-post") return <FirstPost />;
  }

  render() {
    var { returnComponent } = this;
    return (
      <div>
        <Header />
        <Navigation page={this.state.page} handleState={this.handleState} />
        <div className="flex-center outer-box">{returnComponent()}</div>
      </div>
    );
  }
}

export default App;
