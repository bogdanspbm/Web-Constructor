import {CollectionStructure} from "../objects/CollectionStructure.js";
import {createFileFromJSON} from "./FileUtils.js";
import {WidgetStructure} from "../objects/WidgetStructure.js";
import {FileSystemPage} from "../pages/implementation/filesystem/FileSystemPage.js";
import {ScriptStructure} from "../objects/scripts/ScriptStructure.js";

export function postRequest(url, body) {
    const http = new XMLHttpRequest();
    http.open('POST', url, false);

    let result = "";

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState != 4 || http.status != 200) {
            return;
        }

        result = http.responseText;
    }
    http.send(body);
    return result;
}

export function toPascalCase(str) {
    str = str.trim().toLowerCase();

    const words = str.split(/\s+|_/);

    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const pascalCaseStr = capitalizedWords.join('');

    return pascalCaseStr;
}

export function exportProject() {
    const json = {
        collections: document.collections,
        widgets: document.widgets,
        scripts: document.scriptsStructures
    }

    const data = JSON.stringify(json, null, 4);

    postRequest("http://localhost:8080/export", data);
}

export function createAndDownloadFile(data, filename) {
    const blob = new Blob([data], {type: 'application/json'});
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

export function saveProject() {
    const json = {
        collections: document.collections,
        widgets: document.widgets,
        scripts: document.scriptsStructures,
        files: document.files
    }

    const data = JSON.stringify(json, null, 4);
    createAndDownloadFile(data, "project.json");
}

export function loadProject() {
    const uploadFunction = function () {
        return new Promise(function (resolve, reject) {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';

            fileInput.addEventListener('change', function () {
                const file = fileInput.files[0];
                const reader = new FileReader();

                reader.onload = function (event) {
                    const contents = event.target.result;
                    resolve(contents); // Resolve with the file contents as a string
                };

                reader.onerror = function (event) {
                    reject(event.target.error); // Reject with the error object
                };

                reader.readAsText(file);
            });

            fileInput.click();
        });
    };

    document.forceDeletePopup();

    uploadFunction().then(function (contents) {
        const json = JSON.parse(contents);
        generateCollectionsFromJSON(json);
        generateWidgetsFromJSON(json);
        generateScriptsFromJSON(json);
        generateFilesFromJSON(json);

        const fileSystem = new FileSystemPage();
        fileSystem.openPage();
    }).catch(function (error) {
        console.error(error);
    });
}

export function generateScriptsFromJSON(json) {
    const newScripts = {};

    if (!json.scripts) {
        return;
    }

    Object.entries(json.scripts).forEach(([key, value]) => {
        newScripts[key] = new ScriptStructure(value);
    });
    document.scriptsStructures = newScripts;
}

export function generateWidgetsFromJSON(json) {
    const newWidgets = {};

    if (!json.widgets) {
        return;
    }

    Object.entries(json.widgets).forEach(([key, value]) => {
        newWidgets[key] = new WidgetStructure(value);
    });
    document.widgets = newWidgets;
}

export function getComplexField(structure, field) {
    const keys = field.split(":");

    let result = structure;
    for (const key of keys) {
        if (result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return undefined; // Return undefined if the path does not exist
        }
    }

    return result;
}

export function setComplexField(structure, field, value) {
    const keys = field.split(":");

    let obj = structure;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        if (!obj.hasOwnProperty(key) || typeof obj[key] !== "object") {
            obj[key] = {};
        }

        obj = obj[key];
    }

    const lastKey = keys[keys.length - 1];
    obj[lastKey] = value;

    return structure;
}

export function generateCollectionsFromJSON(json) {
    const newCollections = {};

    if (!json.collections) {
        return;
    }

    Object.entries(json.collections).forEach(([key, value]) => {
        const collection = new CollectionStructure(value);
        newCollections[key] = collection;
    });
    document.collections = newCollections;
}

export function generateFilesFromJSON(json) {
    const newFiles = {};
    Object.entries(json.files).forEach(([key, value]) => {
        const file = createFileFromJSON(value);
        newFiles[key] = file;
    });
    document.files = newFiles;
}
