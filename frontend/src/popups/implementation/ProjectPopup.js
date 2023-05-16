import {PopupElement, PopupMenu} from "../Popup.js";
import {loadProject, saveProject} from "../../utils/Utils.js";

export class ProjectPopup extends PopupMenu {

    constructor(args) {
        super(args);

        const loadJSON = new PopupElement("Export JSON");
        loadJSON.setClickEvent(() => {
            saveProject();
        })
        this.append(loadJSON);

        const uploadJSON = new PopupElement("Import JSON");
        uploadJSON.setClickEvent(() => {
            loadProject();
        })
        this.append(uploadJSON);
    }
}