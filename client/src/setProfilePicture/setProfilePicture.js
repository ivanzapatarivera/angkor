import { Component } from "react";

import "./style.css";

export default class SetProfilePicture extends Component {
  render() {
    let image = require("./selfie.jpg")
    return (
      <div>
        <img src={image} alt={image} className="profile-picture" />
      </div>
    );
  }
}
