export class SetTitle {

    getTitle = () => {
        let waveEmoji = "👋";
        let airplaneEmoji = "✈️";
        let title = `Hi ${waveEmoji} Hola Ivan Travel ${airplaneEmoji} Blog`;
        return title;
    }

    returnTitle = () => {
        let title = this.getTitle();
        return title;
    }

}