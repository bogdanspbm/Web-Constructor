export class User {
#id;
#name;
#patronymic;
#phone;
#surname;
#birthdate;
#password;
#mail;
#role;
#sex;
constructor(json) {
this.#id = json.id;
this.#name = json.name;
this.#patronymic = json.patronymic;
this.#phone = json.phone;
this.#surname = json.surname;
this.#birthdate = json.birthdate;
this.#password = json.password;
this.#mail = json.mail;
this.#role = json.role;
this.#sex = json.sex;
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
getPhone() {
return this.#phone;
}
getSurname() {
return this.#surname;
}
getBirthdate() {
return this.#birthdate;
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
getSex() {
return this.#sex;
}
}
export class UserAdapter{
getUsers(){}
getUser(id){}
updateUser(user){}
createUser(user){}
}