class setDefaultStyles {
  setElementStyle = (el, key, val) => {
    el.style[key] = val;
  };

  setElementStyleProperties = (arg) => {
    for (var i in arg) {
      let e = arg[i];
      let el = document.querySelector("#" + i);
      let id = el.id;
      Object.keys(e).forEach((key) => {
        let val = arg[id][key];
        this.setElementStyle(el, key, val);
      });
    }
  };
}

export const { setElementStyleProperties } = new setDefaultStyles();
