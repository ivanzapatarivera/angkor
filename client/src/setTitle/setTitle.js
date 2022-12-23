export class SetTitle {

    getTitle = () => {
        let title = "John S. Brook Travel Blog";
        return title;
    }

    returnTitle = () => {
        let title = this.getTitle();
        return title;
    }

}