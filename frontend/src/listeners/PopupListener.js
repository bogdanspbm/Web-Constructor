export function bindPopupListener() {
    document.popup = null;

    document.createPopup = function (popup, parent) {
        if (document.popup !== null && document.popup !== undefined) {
            document.popup.removeParent()
        }

        document.popup = popup;
        parent.append(popup);
    }

    document.deletePopup = function () {
        if (document.popup !== null && document.popup !== undefined) {
            document.popup.removeParent()
        }
    }
}