import { Component } from "react";
import "./style.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.props = {
      page: "",
      handleState: "",
    };

    this.Navigation = this.Navigation.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    this.checkValue();
  }

  handleState(value) {
    this.props.handleState(value);
    return;
  }
  checkValue() {
    var option = document.querySelectorAll("option");
    option.forEach((el) => {
      el.addEventListener("click", (e) => {
        var value = e.target.value;
        this.handleState(value);
      });
    });
  }

  returnOptions() {
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
    return options;
  }

  returnElements() {
    var options = this.returnOptions();

    var elements = (
      <nav>
        <ul>
          {options.map(function getOptions(option) {
            return (
              <option key={option.text} value={option.id}>
                {option.text}
              </option>
            );
          })}
        </ul>
      </nav>
    );
    return elements;
  }

  Navigation() {
    var navigationEls = this.returnElements();
    return navigationEls;
  }

  render() {
    var { Navigation } = this;
    return <Navigation />;
  }
}
