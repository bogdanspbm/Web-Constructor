import {PopupElement, PopupMenu} from "../Popup.js";
import {saveProject} from "../../utils/Utils.js";

export class ProjectPopup extends PopupMenu {

    constructor(args) {
        super(args);

        const loadJSON = new PopupElement("Load JSON");
        loadJSON.setClickEvent(() => {
            saveProject();
        })
        this.append(loadJSON);

        const uploadJSON = new PopupElement("Upload JSON");
        this.append(uploadJSON);
    }
}