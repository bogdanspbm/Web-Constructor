import {DOM} from "../../../../elements/dom/DOM.js";

export class VectorContainer extends DOM {

    createElement(props) {
        const vector = props.vector;
        super.createElement(props);
        this.setStyle("container-vector");

        const base64String = vector.base64;
        const svg = new DOM().setStyle("svg-preview").setAttribute("background-image", `url(${base64String})`);

        this.append(svg);
    }
}
