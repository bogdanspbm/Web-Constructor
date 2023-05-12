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
        collections: JSON.stringify(document.collections),
        widgets: JSON.stringify(document.widgets)
    }

    postRequest("http://localhost:8080/export", JSON.stringify(json));
}

