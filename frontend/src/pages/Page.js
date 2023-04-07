export class Page {

    elements = []

    constructor(param) {
        this.fillElements(param)
    }

    fillElements(param) {
    }

    openPage() {
        const root = document.getElementById("root");
        const childrenCount = root.children.length

        for (let i = 0; i < childrenCount; i++) {
            root.removeChild(root.children[0])
        }

        this.elements.forEach(element => {
            root.append(element.getDOM());
        })
    }
}
