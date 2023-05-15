import {CollectionStructure} from "../objects/CollectionStructure.js";

export function attributeFromMap(map) {
    let result = "";

    Object.entries(map).forEach(([key, value]) => {
        if (value !== undefined) {
            result += key + ":" + value + ";";
        }
    });

    return result;
}

export function equalsArrays(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

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

export function exportProject() {
    const json = {
        collections: document.collections,
        widgets: document.widgets
    }

    const data = JSON.stringify(json, null, 4).replace(/\\"/g, '"');
    console.log(data);

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
        files: document.files
    }

    const data = JSON.stringify(json, null, 4).replace(/\\"/g, '"');
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
        const json = JSON.parse(contents)
        generateCollectionsFromJSON(json);
        generateWidgetsFromJSON(json);
        generateFilesFromJSON(json);
    }).catch(function (error) {
        console.error(error);
    });
}

export function generateWidgetsFromJSON(json) {
    const newWidgets = {};
    Object.entries(json.widgets).forEach(([key, value]) => {
        newWidgets[key] = new WidgetStructure(value);
    });
    document.widgets = newWidgets;
}

export function generateCollectionsFromJSON(json) {
    const newCollections = {};
    Object.entries(json.collections).forEach(([key, value]) => {
        const collection = new CollectionStructure(value);
        newCollections[key] = collection;
    });
    document.collections = newCollections;
}

export function generateFilesFromJSON(json) {
    const newFiles = {};
    Object.entries(json.files).forEach(([key, value]) => {
        newFiles[key] = createFileFromJSON(value);
    });
    document.files = newFiles;
}

