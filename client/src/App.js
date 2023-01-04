import React, { Component } from "react";
import { SetTitle } from "./setTitle/setTitle";
import SetWelcomeLetter from "./setWelcomeLetter/setWelcomeLetter";

import "./App.css";
import SetProfilePicture from "./setProfilePicture/setProfilePicture";
import FirstPost from "./setFirstPost/firstPost";

const firstPost = "first-post";
const home = "home";

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
    this.firstPost();
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

  firstPost() {
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
    if (page === "welcome") return <SetWelcomeLetter />;
    if (page === "first-post") return <FirstPost />;
  }

  render() {
    var { returnComponent } = this;
    return (
      <div>
        <div className="flex-center outer-box">
          {/* <SetProfilePicture /> */}
          {returnComponent()}
        </div>
      </div>
    );
  }
}

export default App;
