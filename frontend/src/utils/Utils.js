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
    const blob = new Blob([data], { type: 'application/json' });
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

