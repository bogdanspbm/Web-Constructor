export class User {
#id;
#name;
#surname;
#phone;
#birthdate;
#password;
#sex;
#patronymic;
#mail;
#role;
constructor(json) {
this.#password = json.password;
this.#sex = json.sex;
this.#id = json.id;
this.#name = json.name;
this.#surname = json.surname;
this.#phone = json.phone;
this.#birthdate = json.birthdate;
this.#patronymic = json.patronymic;
this.#mail = json.mail;
this.#role = json.role;
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
getphone() {
return this.#phone;
}
getbirthdate() {
return this.#birthdate;
}
getpassword() {
return this.#password;
}
getsex() {
return this.#sex;
}
getpatronymic() {
return this.#patronymic;
}
getmail() {
return this.#mail;
}
getrole() {
return this.#role;
}
}
export class UserAdapter{
getUsers(){}
getUser(id){}
updateUser(user){}
createUser(user){}
}