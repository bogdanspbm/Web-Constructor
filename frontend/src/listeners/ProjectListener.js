export function bindProjectListener() {
    document.projectInfo = {
        name: "Untitled Project",
        groups: {}
    }

    document.loadProjectFromJSON = (json) => {

        if (!json) {
            return;
        }

        document.projectInfo.name = json.name;
    }
}