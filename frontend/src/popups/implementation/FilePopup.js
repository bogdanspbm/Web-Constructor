import {PopupElement, PopupMenu} from "../Popup.js";

export class FilePopup extends PopupMenu {
    constructor(args) {
        super(args);

        const createWidget = new PopupElement("Create Widget");
        this.append(createWidget);

        const createCollection = new PopupElement("Create Collection");
        this.append(createCollection);

        const createFolder = new PopupElement("Create Folder");
        this.append(createFolder);

        const createScript = new PopupElement("Create Script");
        this.append(createScript);

        const createVector = new PopupElement("Create Vector");
        this.append(createVector);
    }
}