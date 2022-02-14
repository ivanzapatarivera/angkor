class setDefaultStyles {
  setElementStyle = (element, key, value) => {
    element.style[key] = value;
  };

  setElementStyleProperties = (arg) => {
    for (var el in arg) {
      let els = arg[el];
      let element = document.querySelector("#" + el);
      let id = element.id;
      Object.keys(els).forEach((key) => {
        let property = arg[id][key];
        this.setElementStyle(element, key, property);
      });
    }
  };
}

export const { setElementStyleProperties } = new setDefaultStyles();
