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

export function exportProject() {
    const json = {
        collections: document.collections,
        widgets: document.widgets
    }

    console.log(json);
}

