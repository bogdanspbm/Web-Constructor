export class Payment {
#id;
#value;
#typeID;
#statusID;
#creationDate;
constructor(json) {
this.#statusID = json.statusID;
this.#creationDate = json.creationDate;
this.#id = json.id;
this.#value = json.value;
this.#typeID = json.typeID;
}
getID() {
return this.#id;
}
getValue() {
return this.#value;
}
getTypeID() {
return this.#typeID;
}
getStatusID() {
return this.#statusID;
}
getCreationDate() {
return this.#creationDate;
}
}
export class PaymentAdapter{
getPayments(){}
getPayment(id){}
updatePayment(payment){}
createPayment(payment){}
}