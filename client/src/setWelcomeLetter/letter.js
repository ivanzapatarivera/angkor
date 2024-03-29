import { Component } from "react";
import Template from "../setTemplates/postText";
import { SetTitle } from "../Title/Title";
import "./style.css";

export default class Letter extends Component {
  componentDidMount() {
    this.ReturnTitle();
  }

  ReturnTitle() {
    const title = `Hi.Hola Ivan Travel Blog`;
    new SetTitle(title).returnTitle();
  }

  ReturnButtonString() {
    let button = "First Post";
    return button;
  }

  ReturnButtonId() {
    let id = "first-post";
    return id;
  }

  ReturnWelcome() {
    let welcome = "Welcome,";
    return welcome;
  }

  ReturnIntroduction() {
    let introduction = "My name is Ivan and thanks for stopping by.";
    return introduction;
  }

  ReturnText() {
    let textArr = [
      "Since a young age, I’ve enjoyed traveling across five continents. It all started after joining friends on an adventure through South and Southeast Asia. I had such a wonderful experience that I decided to give it a go and continue doing what I enjoy the most.",
      "My passion grew as I visited Europe where I fell in love with its people, history and architecture. I also went on a few road trips through North America where I’ve seen one of a kind nature and felt the warmth of its people across Canada, United States, and Mexico. I’ve been to South America to visit friends, taste its gastronomy and dance to its music. ",
      "Although travel may sound like lots of fun, it’s an experience that becomes more incredible when it can be shared with friends from all Around the World. For a traveler, it does not only make each experience unique and cool, it also makes the world much smaller and intimate.",
      "So, I open the doors of my travel box and welcome you to join me through this journey.",
    ];
    return textArr;
  }

  ReturnSignature() {
    let signature = "Ivan";
    return signature;
  }

  ReturnImage() {
    let image = require("./selfie.jpg");
    return image;
  }

  render() {
    let {
      ReturnButtonString,
      ReturnButtonId,
      ReturnWelcome,
      ReturnIntroduction,
      ReturnText,
      ReturnSignature,
      ReturnImage,
    } = this;
    
    return (
        <Template
          btnString={ReturnButtonString()}
          btnId={ReturnButtonId()}
          welcome={ReturnWelcome()}
          introduction={ReturnIntroduction()}
          textArr={ReturnText()}
          signature={ReturnSignature()}
          image={ReturnImage()}
        />
    );
  }
}
