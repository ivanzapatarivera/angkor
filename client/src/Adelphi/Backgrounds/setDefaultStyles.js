var listOfElements = {
  root: {
    backgroundColor: "hsl(240, 100%, 3%)",
    minHeight: "100vh",
    color: "white",
  },
  welcome: {
    backgroundColor: "hsl(240, 50%, 50%)",
    minHeight: "500px",
    color: "white",
  },
};

class setDefaultStyles {
  setForValue = (element, key, value) => {
    element.style[value] = listOfElements[key][value]
  };

  setElementStyleProperties = () => {
    let properties = ["backgroundColor", "minHeight", "color"];
    for (var el in listOfElements) {
      let element = document.querySelector("#" + el);
      let key = element.id;
      properties.forEach((value) => {
        this.setForValue(element, key, value);
      });
    }
  };
}

export const { setElementStyleProperties } = new setDefaultStyles();
