export class Order {
#userID;
#statusID;
#cancelReasonID;
#paymentID;
#creationDate;
#modificationDate;
#id;
#displayNumber;
constructor(json) {
this.#id = json.id;
this.#displayNumber = json.displayNumber;
this.#userID = json.userID;
this.#statusID = json.statusID;
this.#cancelReasonID = json.cancelReasonID;
this.#paymentID = json.paymentID;
this.#creationDate = json.creationDate;
this.#modificationDate = json.modificationDate;
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
}
export class OrderAdapter{
getOrders(){}
getOrder(id){}
updateOrder(order){}
createOrder(order){}
}