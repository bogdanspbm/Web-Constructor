export class User {
#id;
#name;
#patronymic;
#birthdate;
#sex;
#surname;
#phone;
#password;
#mail;
#role;
constructor(json) {
this.#mail = json.mail;
this.#role = json.role;
this.#surname = json.surname;
this.#phone = json.phone;
this.#password = json.password;
this.#birthdate = json.birthdate;
this.#sex = json.sex;
this.#id = json.id;
this.#name = json.name;
this.#patronymic = json.patronymic;
}
getID() {
return this.#id;
}
getName() {
return this.#name;
}
getPatronymic() {
return this.#patronymic;
}
getBirthdate() {
return this.#birthdate;
}
getSex() {
return this.#sex;
}
getSurname() {
return this.#surname;
}
getPhone() {
return this.#phone;
}
getPassword() {
return this.#password;
}
getMail() {
return this.#mail;
}
getRole() {
return this.#role;
}
}
export class UserAdapter{
getUsers(){}
getUser(id){}
updateUser(user){}
createUser(user){}
}