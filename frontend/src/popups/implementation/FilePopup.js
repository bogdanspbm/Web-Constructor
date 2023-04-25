import {PopupElement, PopupMenu} from "../Popup.js";
import {EFileType} from "../../enums/EFileType.js";
import {WidgetFile} from "../../pages/implementation/filesystem/file/implementations/WidgetFile.js";
import {WidgetStructure} from "../../objects/WidgetStructure.js";
import {DirectoryFile} from "../../pages/implementation/filesystem/file/implementations/DirectoryFile.js";
import {CollectionFile} from "../../pages/implementation/filesystem/file/implementations/CollectionFile.js";

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
            console.log("element")
            document.addFile(createFileFromType(fileType))
        })
    }
}

/**
 * @param {EFileType} fileType
 * @returns {FileStructure}
 */
function createFileFromType(fileType) {
    switch (fileType) {
        case EFileType.WIDGET: {
            return new WidgetFile(new WidgetStructure());
        }
        case EFileType.DIRECTORY: {
            return new DirectoryFile();
        }
        case EFileType.COLLECTION: {
            return new CollectionFile();
        }

    }
}