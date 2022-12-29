import { Component } from "react";

export default class Letter extends Component {
  returnWelcome = () => {
    let welcome = "Welcome";
    return welcome;
  };

  returnIntroduction = () => {
    let introduction =
      "My name is Ivan and thanks for stopping by. Since a young age, I’ve enjoyed traveling across five continents. It all started after joining friends on an adventure through South and Southeast Asia. I had such a wonderful experience that I decided to give it a go and continue doing what I enjoy the most.";
    return introduction;
  };

  returnText = () => {
    let textArr = [
      "My passion grew as I visited Europe where I fell in love with its people, history and architecture. I also went on a few road trips through North America where I’ve seen one of a kind nature and felt the warmth of its people across Canada, United States, and Mexico. I’ve been to South America to visit friends, taste its gastronomy and dance to its music. ",
      "Although travel may sound like lots of fun, it’s an experience that becomes more incredible when it can be shared with friends from all Around the World. For a traveler, it does not only make each experience unique and cool, it also makes the world much smaller and intimate.",
      "So, I open the doors of my travel box and welcome you to join me through this journey.",
    ];

    return textArr;
  };

  returnSignature = () => {
    let signature = "Ivan";
    return signature;
  };

  render() {
    let { returnWelcome, returnIntroduction, returnText, returnSignature } =
      this;
    return (
      <div className="">
        <div className="welcome">{returnWelcome()}</div>
        <div className="introduction">{returnIntroduction()}</div>
        <div className="letter-text">{returnText()}</div>
        <div className="signature">{returnSignature()}</div>
      </div>
    );
  }
}
