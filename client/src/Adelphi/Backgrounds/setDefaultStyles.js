var listOfElements = {
  root: {
    backgroundColor: "hsl(240, 100%, 3%)",
    minHeight: "100vh",
    color: "white",
  },
};

class setDefaultStyles {
  setForValue = (property, element) => {
    for (var el in listOfElements) {
      element.style[property] = listOfElements[el][property];
    }
  };

  setBackgroundColor = (element) => {
    let properties = ["backgroundColor", "minHeight", "color"];
    properties.forEach((value) => {
      let property = value;
      this.setForValue(property, element);
    });
  };
}

export const { setBackgroundColor } = new setDefaultStyles();
