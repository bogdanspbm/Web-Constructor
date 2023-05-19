import {EPageType} from "../enums/EPageType.js";

export class Page {

    elements = [];
    type = EPageType.FILE_SYSTEM;

    constructor(props) {
        this.type = props.type;
        this.fillElements(props);
    }

    fillElements(props) {
    }


    openPage() {
        const root = document.getElementById("root");
        const childrenCount = root.children.length;

        for (let i = 0; i < childrenCount; i++) {
            root.removeChild(root.children[0]);
        }

        this.elements.forEach(element => {
            root.append(element.getDOM());
        })
    }

    getType() {
        return this.type;
    }
}
