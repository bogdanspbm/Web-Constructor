export class User {
    #id;
    #name;
    #phone;
    #birthdate;
    #sex;
    #surname;
    #patronymic;
    #password;
    #mail;
    #role;

    constructor(json) {
        this.#patronymic = json.patronymic;
        this.#password = json.password;
        this.#mail = json.mail;
        this.#role = json.role;
        this.#sex = json.sex;
        this.#surname = json.surname;
        this.#name = json.name;
        this.#phone = json.phone;
        this.#birthdate = json.birthdate;
        this.#id = json.id;
    }

    getID() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getPhone() {
        return this.#phone;
    }

    getBirthdate() {
        return this.#birthdate;
    }

    getRole() {
        return this.#role;
    }

    getSex() {
        return this.#sex;
    }

    getSurname() {
        return this.#surname;
    }

    getPatronymic() {
        return this.#patronymic;
    }

    getPassword() {
        return this.#password;
    }

    getMail() {
        return this.#mail;
    }
}

export function getRows() {
    //  Implement me!
}

export function getRowByID(id) {
    //  Implement me!
}

export function updateRow(item) {
    //  Implement me!
}

export function createRow(item) {
    //  Implement me!
}