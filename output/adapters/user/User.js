import * as library from "../../library/RequestLibrary.js"
export class User {
#id;
#name;
#surname;
#password;
#sex;
#patronymic;
#phone;
#birthdate;
#mail;
#role;
constructor(json) {
this.#id = json.id;
this.#name = json.name;
this.#surname = json.surname;
this.#password = json.password;
this.#sex = json.sex;
this.#patronymic = json.patronymic;
this.#phone = json.phone;
this.#birthdate = json.birthdate;
this.#mail = json.mail;
this.#role = json.role;
}
getRole() {
return this.#role;
}
getPatronymic() {
return this.#patronymic;
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
getSex() {
return this.#sex;
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