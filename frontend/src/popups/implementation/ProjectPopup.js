import {PopupElement, PopupMenu} from "../Popup.js";
import {loadProject, saveProject} from "../../utils/Utils.js";

export class ProjectPopup extends PopupMenu {

    constructor(args) {
        super(args);

        const loadJSON = new PopupElement("Load JSON");
        loadJSON.setClickEvent(() => {
            saveProject();
        })
        this.append(loadJSON);

        const uploadJSON = new PopupElement("Upload JSON");
        uploadJSON.setClickEvent(() => {
            loadProject();
        })
        this.append(uploadJSON);
    }
}