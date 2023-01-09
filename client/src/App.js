import React, { Component } from "react";
import { SetTitle } from "./Title/Title";
import SetWelcomeLetter from "./setWelcomeLetter/setWelcomeLetter";

import "./App.css";
import FirstPost from "./setFirstPost/firstPost";
import Header from "./Header/Header";

const firstPost = "first-post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "welcome",
    };
    this.returnComponent = this.returnComponent.bind(this);
  }

  componentDidMount = () => {
    let title = this.setTitle();
    this.changeTitle(title);
    this.handleFirstPostBtnVisibility();
  };

  setTitle() {
    let title = new SetTitle().returnTitle();
    return title;
  }

  changeTitle(title) {
    document.title = title;
    return;
  }

  changeStatePage() {
    console.log("clicked on");
  }

  handleFirstPostBtnVisibility() {
    const firstPostBtn = document.getElementById(firstPost);
    if (firstPostBtn) {
      firstPostBtn.addEventListener("click", () => {
        firstPostBtn.style.visibility = "hidden";
        this.setState({
          page: firstPost,
        });
      });
    }
  }

  returnComponent() {
    var page = this.state.page;
    console.log(page)
    if (page === "welcome") return <SetWelcomeLetter />;
    if (page === "first-post") return <FirstPost />;
  }

  render() {
    var { returnComponent } = this;
    return (
      <div>
        <Header />
        <div className="flex-center outer-box">
          {returnComponent()}
        </div>
      </div>
    );
  }
}

export default App;
