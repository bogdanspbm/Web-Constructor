export class Payment {
#id;
#value;
#typeID;
#statusID;
#creationDate;
constructor(json) {
this.#id = json.id;
this.#value = json.value;
this.#typeID = json.typeID;
this.#statusID = json.statusID;
this.#creationDate = json.creationDate;
}
getStatusID() {
return this.#statusID;
}
getCreationDate() {
return this.#creationDate;
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
}
export class PaymentAdapter{
getPayments(){}
getPayment(id){}
updatePayment(payment){}
createPayment(payment){}
}