var defaultBackgroundColor = "hsl(240, 100%, 3%)";
var bodyColor = "lightgray";
var headerColor = "white";
var center = "center";

let defaultTextStyle = {
  color: "white",
  textAlign: "center",
  textWeight: "bold",
};

export var listOfAppElements = {
  root: {
    backgroundColor: defaultBackgroundColor,
    minHeight: "100vh",
    color: headerColor,
  },
  welcome: {
    backgroundColor: "hsl(240, 50%, 50%)",
    height: "50px",
    minHeight: "10vh",
    textAlign: center,
  },
  message: {
    color: bodyColor,
    textAlign: center,
  },
};
