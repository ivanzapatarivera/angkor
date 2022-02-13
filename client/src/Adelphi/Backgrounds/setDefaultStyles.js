import { listOfElements } from "./listOfElements";

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
