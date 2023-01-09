import { Component } from "react";
import "./style.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "page",
    };
    this.Navigation = this.Navigation.bind(this);
  }

  Navigation() {
    var options = [
      {
        id: "welcome",
        text: "Welcome Letter",
      },
      {
        id: "first-post",
        text: "First Post",
      },
    ];

    var elements = (
      <nav>
        <ul>
          {options.map(function getOptions(option) {
            var text = option.text;
            return (
              <li key={text} data-id={text}>
                {text}
              </li>
            );
          })}
        </ul>
      </nav>
    );
    return elements;
  }

  render() {
    var { Navigation } = this;
    return <Navigation />;
  }
}
