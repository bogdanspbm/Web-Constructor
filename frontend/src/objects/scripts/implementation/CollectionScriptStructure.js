import {ScriptStructure} from "../ScriptStructure.js";
import {toPascalCase} from "../../../utils/Utils.js";

export class CollectionScriptStructure extends ScriptStructure {

    constructor(collectionName) {
        super();
        this.body = this.generateEmptyBody(collectionName);
    }

    generateEmptyBody(collectionName) {
        const name = toPascalCase(collectionName);

        return "export function getRows() {\n" +
            "   //  Implement me! \n" +
            "}\n" +
            "\n" +
            "export function getRowByID(id) {\n" +
            "   //  Implement me! \n" +
            "}\n" +
            "\n" +
            "export function updateRow(item) {\n" +
            "   //  Implement me! \n" +
            "}\n" +
            "\n" +
            "export function createRow(item) {\n" +
            "   //  Implement me! \n" +
            "}";
    }
}