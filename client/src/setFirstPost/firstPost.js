import { Component } from "react";
import Template from "../setTemplates/postText";
import { SetTitle } from "../Title/Title";

var home = "home";

export default class FirstPost extends Component {
  componentDidMount() {
    this.setTitle();
    this.updateBackgroundImage();
    this.setHomeEventListener();
  }

  setTitle() {
    var title = "My First Post of 2023 | Hi.Hola Ivan";
    new SetTitle(title).returnTitle();
  }

  updateBackgroundImage() {
    const image = require("./background_taj.jpg");
    document.body.style.backgroundImage = `url(${image})`;
  }

  setHomeEventListener() {
    var btn = document.getElementById(home);
    btn.style.font = "bold 1.75rem arial,sans-serif";
    if (btn) {
      btn.addEventListener("click", function () {
        window.location.reload();
      });
    }
  }

  returnWelcome() {
    const welcome = "Hello There!";
    return welcome;
  }

  returnIntroduction() {
    const introduction =
      "I hope that all of you are having such a great start to the New Year 2023. I want to thank you for taking your time to read my first post of the year. ";
    return introduction;
  }

  returnText() {
    const text = [
      "So far, 2023 started with me scrambling around pictures of my travels and I have discovered that my past has been similar to a kid's puzzle. Each experience has been unique and full of flavor of its own.",
      "I am yet to find out what kind of final image I will end up with this blog, however, it's super exciting to be able to share every step of the way with all of you and discover it together.",
      "Let's travel through this journey of the past and hope that we all enjoy it together. It’s going to be super fun when we get to travel back in time to these wonderful destinations and, with some good luck, get to new ones. I would love to have you come along and join me in my travels.",
      "See you in the next post!",
    ];
    return text;
  }

  returnSignature() {
    const signature = "Ivan";
    return signature;
  }

  returnImage() {
    const image = require("./selfie.jpg");
    return image;
  }

  render() {
    var {
      returnWelcome,
      returnIntroduction,
      returnText,
      returnSignature,
      returnImage,
    } = this;
    return (
      <Template
        welcome={returnWelcome()}
        introduction={returnIntroduction()}
        textArr={returnText()}
        signature={returnSignature()}
        image={returnImage()}
      />
    );
  }
}
