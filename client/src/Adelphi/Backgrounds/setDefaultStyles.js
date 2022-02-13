var defaultBackgroundColor = "hsl(240, 100%, 3%";

var listOfElements = {
  root: {
    backgroundColor: defaultBackgroundColor,
    minHeight: "100vh",
    color: "white",
  },
  welcome: {
    backgroundColor: "hsl(240, 50%, 50%)",
    minHeight: "500px",
  },
  message: {
    color: "lightgray",
  },
};

class setDefaultStyles {
  setForValue = (element, key, value) => {
    element.style[key] = value;
  };

  setElementStyleProperties = () => {
    for (var el in listOfElements) {
      let element = document.querySelector("#" + el);
      let id = element.id;
      Object.keys(listOfElements[el]).forEach((key) => {
        let property = listOfElements[id][key];
        this.setForValue(element, key, property);
      });
    }
  };
}

export const { setElementStyleProperties } = new setDefaultStyles();
