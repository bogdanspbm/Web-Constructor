export class User {
    #phone;
    #password;
    #sex;
    #id;
    #name;
    #surname;
    #patronymic;
    #birthdate;
    #mail;
    #role;

    constructor(json) {
        this.#phone = json.phone;
        this.#password = json.password;
        this.#sex = json.sex;
        this.#mail = json.mail;
        this.#role = json.role;
        this.#id = json.id;
        this.#name = json.name;
        this.#surname = json.surname;
        this.#patronymic = json.patronymic;
        this.#birthdate = json.birthdate;
    }

    getmail() {
        return this.#mail;
    }

    getrole() {
        return this.#role;
    }

    getid() {
        return this.#id;
    }

    getname() {
        return this.#name;
    }

    getsurname() {
        return this.#surname;
    }

    getpatronymic() {
        return this.#patronymic;
    }

    getbirthdate() {
        return this.#birthdate;
    }

    getphone() {
        return this.#phone;
    }

    getpassword() {
        return this.#password;
    }

    getsex() {
        return this.#sex;
    }
}

export class UserAdapter {
    getUsers() {
    }

    getUser(id) {
    }

    updateUser(user) {
    }

    createUser(user) {
    }
}