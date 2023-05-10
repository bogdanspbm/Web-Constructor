import {PopupElement, PopupMenu} from "../Popup.js";
import {EFileType} from "../../enums/EFileType.js";

export class FilePopup extends PopupMenu {
    constructor(args) {
        super(args);

        const createWidget = new FilePopupElement(EFileType.WIDGET);
        this.append(createWidget);

        const createCollection = new FilePopupElement(EFileType.COLLECTION);
        this.append(createCollection);

        const createFolder = new FilePopupElement(EFileType.DIRECTORY);
        this.append(createFolder);

        const createScript = new FilePopupElement(EFileType.SCRIPT);
        this.append(createScript);

        const createVector = new FilePopupElement(EFileType.VECTOR);
        this.append(createVector);
    }
}

class FilePopupElement extends PopupElement {
    /**
     * @param {EFileType} fileType
     */
    constructor(fileType) {
        super("Create " + fileType['name']);

        this.setClickEvent(action => {
            document.createFile(fileType);
        })
    }
}
