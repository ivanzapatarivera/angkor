export class SetTitle {

    getTitle = () => {
        let title = "Hi Travel Blog";
        return title;
    }

    returnTitle = () => {
        let title = this.getTitle();
        return title;
    }

}