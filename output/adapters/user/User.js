import * as library from "./../../library/RequestLibrary.js"
export class User {
#role;
#sex;
#id;
#name;
#surname;
#patronymic;
#phone;
#birthdate;
#password;
#mail;
constructor(json) {
this.#phone = json.phone;
this.#birthdate = json.birthdate;
this.#password = json.password;
this.#mail = json.mail;
this.#id = json.id;
this.#name = json.name;
this.#surname = json.surname;
this.#patronymic = json.patronymic;
this.#role = json.role;
this.#sex = json.sex;
}
getID() {
return this.#id;
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
getRole() {
return this.#role;
}
getSex() {
return this.#sex;
}
getPhone() {
return this.#phone;
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