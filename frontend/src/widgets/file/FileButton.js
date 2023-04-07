import {DOM} from "../../elements/dom/DOM.js";
import {Icon} from "../../elements/icon/Icon.js";

export class FileButton extends DOM {


    /**
     * @param {EFile} file
     */
    createElement(file) {
        super.createElement();
        this.setStyle("file-bound")

        this.button = new DOM().setStyle("file")
        this.append(this.button)

        this.icon = new Icon(file['icon']).setStyle("file-icon")
        this.button.append(this.icon)

        this.border = new DOM().setStyle("file-border").setAttribute("background", file['color'])
        this.button.append(this.border)

        this.header = new DOM().setStyle("file-text").setText(file["name"])
        this.border.append(this.header)

    }
}