export class User {
#name;
#patronymic;
#mail;
#sex;
#id;
#surname;
#phone;
#birthdate;
#password;
#role;
constructor(json) {
this.#name = json.name;
this.#patronymic = json.patronymic;
this.#mail = json.mail;
this.#id = json.id;
this.#surname = json.surname;
this.#phone = json.phone;
this.#birthdate = json.birthdate;
this.#password = json.password;
this.#role = json.role;
this.#sex = json.sex;
}
getname() {
return this.#name;
}
getpatronymic() {
return this.#patronymic;
}
getmail() {
return this.#mail;
}
getid() {
return this.#id;
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
getrole() {
return this.#role;
}
getsex() {
return this.#sex;
}
}
export class UserAdapter{
getUsers(){}
getUser(id){}
updateUser(user){}
createUser(user){}
}