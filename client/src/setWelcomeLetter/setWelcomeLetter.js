import { Component } from "react";
import Letter from "./letter";
import "./style.css";

export default class SetWelcomeLetter extends Component {
  render() {
    return (
      <div className="letter">
        <Letter />
      </div>
    );
  }
}
