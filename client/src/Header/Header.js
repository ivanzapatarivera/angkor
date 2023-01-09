import { Component } from "react";
import "./style.css";

export default class Header extends Component {
  Header() {
    var string = "Hola, from Ivan";
    return <header>{string}</header>;
  }

  render() {
    let { Header } = this;

    return (
      <Header />
    );
  }
}
