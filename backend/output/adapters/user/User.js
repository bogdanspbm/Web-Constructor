import * as library from "./../../library/RequestLibrary.js"
export class User {
#name;
#phone;
#birthdate;
#mail;
#role;
#sex;
#id;
#surname;
#patronymic;
#password;
constructor(json) {
this.#id = json.id;
this.#surname = json.surname;
this.#patronymic = json.patronymic;
this.#password = json.password;
this.#name = json.name;
this.#phone = json.phone;
this.#birthdate = json.birthdate;
this.#mail = json.mail;
this.#role = json.role;
this.#sex = json.sex;
}
getSex() {
return this.#sex;
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
getMail() {
return this.#mail;
}
getRole() {
return this.#role;
}
getID() {
return this.#id;
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