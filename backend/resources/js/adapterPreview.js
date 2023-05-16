export class User {

    #name;
    #surname;


    constructor(json) {
        this.#name = json.name;
        this.#surname = json.surname;
    }

    getName() {
        return this.#name
    }

    getSurname() {
        return this.#surname
    }
}

export class UserAdapter {
    constructor() {
    }

    getUser(id) {
    }

    getUsers() {
    }

    updateUser(user) {
    }

    createUser(user) {
    }


}