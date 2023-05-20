import {DOM} from "../../../../elements/dom/DOM.js";
import {CreateGroupButton} from "./widgets/CreateGroupButton.js";

export class GroupsContainer extends DOM {

    createElement(props) {
        super.createElement(props);
        this.setStyle("group-container");

        const addButton = new CreateGroupButton();
        this.append(addButton);
    }
}