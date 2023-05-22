export class User {
#id;
#name;
#phone;
#password;
#role;
#sex;
#surname;
#patronymic;
#birthdate;
#mail;
constructor(json) {
this.#surname = json.surname;
this.#patronymic = json.patronymic;
this.#birthdate = json.birthdate;
this.#mail = json.mail;
this.#id = json.id;
this.#name = json.name;
this.#phone = json.phone;
this.#password = json.password;
this.#role = json.role;
this.#sex = json.sex;
}
getname() {
return this.#name;
}
getphone() {
return this.#phone;
}
getpassword() {
return this.#password;
}
getrole() {
return this.#role;
}
getsex() {
return this.#sex;
}
getid() {
return this.#id;
}
getpatronymic() {
return this.#patronymic;
}
getbirthdate() {
return this.#birthdate;
}
getmail() {
return this.#mail;
}
getsurname() {
return this.#surname;
}
}
export class UserAdapter{
getUsers(){}
getUser(id){}
updateUser(user){}
createUser(user){}
}