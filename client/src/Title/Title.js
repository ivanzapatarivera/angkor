export class SetTitle {
  constructor(string) {
    this.string = string;
  }

  returnTitle = () => {
    let title = this.string;
    return (document.title = title);
  };
}
