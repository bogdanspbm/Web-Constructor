export class User {
#surname;
#phone;
#birthdate;
#role;
#sex;
#id;
#name;
#patronymic;
#password;
#mail;
constructor(json) {
this.#role = json.role;
this.#surname = json.surname;
this.#phone = json.phone;
this.#birthdate = json.birthdate;
this.#password = json.password;
this.#mail = json.mail;
this.#sex = json.sex;
this.#id = json.id;
this.#name = json.name;
this.#patronymic = json.patronymic;
}
getid() {
return this.#id;
}
getname() {
return this.#name;
}
getpatronymic() {
return this.#patronymic;
}
getpassword() {
return this.#password;
}
getmail() {
return this.#mail;
}
getsex() {
return this.#sex;
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