export class CollectionStructure {

    constructor() {
        this.name = "New Collection"
        this.uid = Math.random().toString().replace("0.", "")
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }


    getUID() {
        return this.uid
    }
}