import {DOM} from "../../../elements/dom/DOM.js";
import {EPageType} from "../../../enums/EPageType.js";
import {Button} from "../../../elements/default/Button.js";
import {exportProject} from "../../../utils/Utils.js";
import {CollectionHeaderTabs} from "../../../pages/implementation/collection/header/CollectionHeaderTabs.js";

export class HeaderTabs extends DOM {
    createElement(props) {
        super.createElement(props);

        switch (props.type) {
            case EPageType.FILE_SYSTEM: {
                const
                    buttonExport = new Button().setText("Generate")
                        .setAttribute("height", "24px").setAttribute("border-radius", "5px")
                        .setAttribute("margin-right", "10px").setStyle("blue-button");
                buttonExport.setClickEvent(exportProject);
                props.parent.append(buttonExport);
                break
            }
            case EPageType.COLLECTION: {
                const collectionTabs = new CollectionHeaderTabs();
                props.parent.append(collectionTabs);
                break;
            }
        }
    }
}