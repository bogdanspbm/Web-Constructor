export class Order {
#id;
#displayNumber;
#userID;
#statusID;
#cancelReasonID;
#paymentID;
#creationDate;
#modificationDate;
constructor(json) {
this.#displayNumber = json.displayNumber;
this.#userID = json.userID;
this.#statusID = json.statusID;
this.#cancelReasonID = json.cancelReasonID;
this.#paymentID = json.paymentID;
this.#creationDate = json.creationDate;
this.#modificationDate = json.modificationDate;
this.#id = json.id;
}
getCancelReasonID() {
return this.#cancelReasonID;
}
getPaymentID() {
return this.#paymentID;
}
getCreationDate() {
return this.#creationDate;
}
getModificationDate() {
return this.#modificationDate;
}
getID() {
return this.#id;
}
getDisplayNumber() {
return this.#displayNumber;
}
getUserID() {
return this.#userID;
}
getStatusID() {
return this.#statusID;
}
}
export class OrderAdapter{
getOrders(){}
getOrder(id){}
updateOrder(order){}
createOrder(order){}
}