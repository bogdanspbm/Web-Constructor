import {WidgetFile} from "../objects/files/implementation/WidgetFile.js";
import {CollectionFile} from "../objects/files/implementation/CollectionFile.js";
import {DirectoryFile} from "../objects/files/implementation/DirectoryFile.js";
import {EFileType} from "../enums/EFileType.js";
import {ScriptFile} from "../objects/files/implementation/ScriptFile.js";


export function createFileFromJSON(json) {
    const structure = document.findStructureByUID(json.structure.uid);
    switch (json.type.name) {
        case EFileType.WIDGET.name: {
            return new WidgetFile(structure);
        }
        case EFileType.COLLECTION.name: {
            return new CollectionFile(structure);
        }

        case EFileType.DIRECTORY.name: {
            return new DirectoryFile(structure);
        }

        case EFileType.SCRIPT.name: {
            return new ScriptFile(structure);
        }
    }

    return undefined;
}
