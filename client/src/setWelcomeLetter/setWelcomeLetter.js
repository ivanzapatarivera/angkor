import React, { Component, Suspense } from "react";
import "./style.css";
import Letter from "./letter"

export default class SetWelcomeLetter extends Component {
  render() {
    return (
      <div className="letter">
          <Letter />
      </div>
    );
  }
}
