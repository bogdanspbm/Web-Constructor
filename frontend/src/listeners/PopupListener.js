export function bindPopupListener() {
    document.popup = null;
    document.overlappedMenuItem = null;

    document.createPopup = function (popup, parent) {
        
        if (document.popup !== null && document.popup !== undefined) {
            document.popup.removeParent()
        }

        document.popup = popup;
        parent.append(popup);
    }


    document.forceDeletePopup = function () {
        const popup = document.popup;

        if (popup !== null && popup !== undefined) {
            popup.removeParent()
        }
    }

    document.deletePopup = function (delay) {

        if(!delay){
            delay = 100;
        }

        const delayInMilliseconds = delay;

        if (document.overlappedMenuItem !== null) {
            return
        }

        const popup = document.popup;

        if (popup !== null && popup !== undefined) {
            document.popupTimeout = setTimeout(function () {
                if (document.overlappedMenuItem !== null) {
                    return
                }
                popup.removeParent()
            }, delayInMilliseconds);
        }
    }

    document.setOverlappedMenuItem = function (item) {
        if (item !== null && item !== undefined) {
            clearTimeout(document.popupTimeout)
        }
        document.overlappedMenuItem = item
    }
}