import { Component } from "react";
import "./style.css";

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.props = {
      welcome: props.welcome,
      introduction: props.introduction,
      textArr: props.textArr,
      signature: props.signature,
      image: props.image,
    };
    this.ReturnImage = this.ReturnImage.bind(this);
    this.ReturnIntroduction = this.ReturnIntroduction.bind(this);
    this.ReturnWelcome = this.ReturnWelcome.bind(this);
    this.ReturnText = this.ReturnText.bind(this);
    this.ReturnSignature = this.ReturnSignature.bind(this);
  }

  ReturnWelcome() {
    let welcome = this.props.welcome;
    console.log(welcome);
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
      ReturnWelcome,
      ReturnIntroduction,
      ReturnText,
      ReturnSignature,
      ReturnImage,
    } = this;

    return (
      <div className="letter">
        <div>
          <div className="btn" id="home">
            ⌂
          </div>
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
