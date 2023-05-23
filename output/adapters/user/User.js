import * as library from "./../../library/RequestLibrary.js"
export class User {
#patronymic;
#phone;
#password;
#role;
#name;
#surname;
#mail;
#sex;
#id;
#birthdate;
constructor(json) {
this.#surname = json.surname;
this.#patronymic = json.patronymic;
this.#phone = json.phone;
this.#password = json.password;
this.#role = json.role;
this.#name = json.name;
this.#birthdate = json.birthdate;
this.#mail = json.mail;
this.#sex = json.sex;
this.#id = json.id;
}
getSex() {
return this.#sex;
}
getID() {
return this.#id;
}
getBirthdate() {
return this.#birthdate;
}
getMail() {
return this.#mail;
}
getPhone() {
return this.#phone;
}
getPassword() {
return this.#password;
}
getRole() {
return this.#role;
}
getName() {
return this.#name;
}
getSurname() {
return this.#surname;
}
getPatronymic() {
return this.#patronymic;
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