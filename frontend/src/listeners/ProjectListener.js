export function bindProjectListener() {
    document.projectInfo = {
        name: "Untitled Project"
    }

    document.loadProjectFromJSON = (json) => {

        if (!json) {
            return;
        }

        document.projectInfo.name = json.name;
    }
}