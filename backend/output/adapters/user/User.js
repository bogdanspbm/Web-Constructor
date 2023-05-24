import * as library from "./../../library/RequestLibrary.js"
export class User {
#role;
#sex;
#name;
#surname;
#phone;
#password;
#id;
#patronymic;
#birthdate;
#mail;
constructor(json) {
this.#id = json.id;
this.#patronymic = json.patronymic;
this.#birthdate = json.birthdate;
this.#mail = json.mail;
this.#sex = json.sex;
this.#name = json.name;
this.#surname = json.surname;
this.#phone = json.phone;
this.#password = json.password;
this.#role = json.role;
}
getMail() {
return this.#mail;
}
getID() {
return this.#id;
}
getPatronymic() {
return this.#patronymic;
}
getBirthdate() {
return this.#birthdate;
}
getPassword() {
return this.#password;
}
getRole() {
return this.#role;
}
getSex() {
return this.#sex;
}
getName() {
return this.#name;
}
getSurname() {
return this.#surname;
}
getPhone() {
return this.#phone;
}
}
export function getRows() {
   const response = library.httpGet("http://127.0.0.1:9080/users/");
   const json = JSON.parse(response);
   return json.users;
}

export function getRowByID(id) {
   const response = library.httpGet("http://127.0.0.1:9080/users/" + id);
   const json = JSON.parse(response);
   return json.user;
}

export function updateRow(item) {
   //  Implement me! 
}

export function createRow(item) {
   //  Implement me! 
}