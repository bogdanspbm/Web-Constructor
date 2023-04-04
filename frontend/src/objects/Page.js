export class Page {

    constructor() {
        this.name = "Untitled"
        this.uid = Math.random().toString().replace("0.", "")
    }

    getName() {
        return this.name
    }

    getUID() {
        return this.uid
    }
}