import { Component } from "react";
import "./style.css";

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.props = {
      string: props.btnString,
      id: props.btnId,
      welcome: props.welcome,
      introduction: props.introduction,
      textArr: props.textArr,
      signature: props.signature,
      image: props.image,
    };
    this.ReturnButton = this.ReturnButton.bind(this);
    this.ReturnImage = this.ReturnImage.bind(this);
    this.ReturnIntroduction = this.ReturnIntroduction.bind(this);
    this.ReturnWelcome = this.ReturnWelcome.bind(this);
    this.ReturnText = this.ReturnText.bind(this);
    this.ReturnSignature = this.ReturnSignature.bind(this);
  }

  ReturnButton() {
    let btnString = this.props.btnString;
    let btnId = this.props.btnId;
    return <div className="btn" id={btnId}>{btnString}</div>
  }

  ReturnWelcome() {
    let welcome = this.props.welcome;
    return welcome;
  }

  ReturnIntroduction() {
    let introduction = this.props.introduction;
    return introduction;
  }

  ReturnText() {
    let textArr = this.props.textArr;
    return textArr;
  }

  ReturnSignature() {
    let signature = this.props.signature;
    return signature;
  }

  ReturnImage() {
    let image = this.props.image;
    return <img src={image} className="profile-picture" alt={image} />;
  }

  render() {
    let {
      ReturnButton,
      ReturnWelcome,
      ReturnIntroduction,
      ReturnText,
      ReturnSignature,
      ReturnImage,
    } = this;

    return (
      <div className="letter">
        <div>
          {/* <div className="btn" id="home"> */}
            <ReturnButton />
          {/* </div> */}
          <section className="welcome">
            <div className="welcome-text">
              <ReturnWelcome />
            </div>
            <div className="welcome-image">
              <ReturnImage />
            </div>
          </section>
          <article>
            <p className="introduction">
              <ReturnIntroduction />
            </p>
            {ReturnText().map((element) => {
              return <p className="letter-text">{element}</p>;
            })}

            <div className="signature">
              <ReturnSignature />
            </div>
          </article>
        </div>
      </div>
    );
  }
}
