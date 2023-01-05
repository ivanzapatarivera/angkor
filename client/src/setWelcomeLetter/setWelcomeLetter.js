import React, { Component, Suspense } from "react";
import "./style.css";

const Letter = React.lazy(() => import("./letter"));

export default class SetWelcomeLetter extends Component {
  render() {
    return (
      <div className="letter">
        <Suspense fallback={<div>Loading</div>}>
          <Letter />
        </Suspense>
      </div>
    );
  }
}
