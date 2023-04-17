import {DOM} from "../../../../elements/dom/DOM.js";
import {Icon} from "../../../../elements/icon/Icon.js";
import {Button} from "../../../../elements/default/Button.js";

export class FileButton extends DOM {

    constructor(file) {
        super(file);


        this.button.setClickEvent(event => {
            file.openAction(event)
        })
    }

    updateFile(file) {
        this.name.setText(file.getName())
        this.button.setClickEvent(event => {
            file.openAction(event)
        })
    }


    /**
     * @param {FileStructure} file
     */
    createElement(file) {
        super.createElement();
        this.setStyle("file-bound")

        this.button = new Button().setStyle("file")
        this.append(this.button)

        this.icon = new Icon(file.getType()['icon']).setStyle("file-icon")
        this.button.append(this.icon)

        this.border = new DOM().setStyle("file-border").setAttribute("background", file.getType()['color'])
        this.button.append(this.border)

        this.header = new DOM().setStyle("file-text").setText(file.getType()["name"])
        this.border.append(this.header)

        this.name = new DOM().setStyle("small-header").setAttribute("text-align", "center").setAttribute("margin-top", "16px").setText(file.getName())
        this.append(this.name)

        const parent = this

        // Rename on Double Click
        parent.element.addEventListener("dblclick", function (event) {
                if (parent.name.element.innerHTML === file.getType().default_name) {
                    parent.name.element.innerHTML = ""
                }

                parent.name.setTag("contenteditable", "true")
                parent.name.element.focus()


                parent.name.element.addEventListener('keypress', function (event) {
                    if (event.key === 'Enter') {
                        const newName = parent.name.element.innerHTML
                        file.setName(newName)
                        parent.name.setTag("contenteditable", "false")
                    }
                });

                parent.header.element.addEventListener("focusout", (event) => {
                    const newName = parent.header.element.innerHTML
                    file.setName(newName)
                    parent.header.setTag("contenteditable", "false")
                });
            }
        )
    }


}