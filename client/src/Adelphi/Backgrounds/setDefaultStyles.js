let defaultBackgroundColor = "hsl(240, 100%, 3%)";
let minHeight = "100vh";

class setDefaultStyles {
  setBackgroundColor = (element) => {
    if (element.id === "root") {
      return (element.style.backgroundColor = defaultBackgroundColor);
    } else return;
  };

  setElementHeight = (element) => {
    if (element.id === "root") {
      return (element.style.minHeight = minHeight);
    } else return;
  };
}

export const { setBackgroundColor, setElementHeight } = new setDefaultStyles();
