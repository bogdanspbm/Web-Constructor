export class Delivery {
#orderID;
#addressID;
#targetDate;
#typeID;
#id;
constructor(json) {
this.#id = json.id;
this.#orderID = json.orderID;
this.#addressID = json.addressID;
this.#targetDate = json.targetDate;
this.#typeID = json.typeID;
}
getID() {
return this.#id;
}
getOrderID() {
return this.#orderID;
}
getAddressID() {
return this.#addressID;
}
getTargetDate() {
return this.#targetDate;
}
getTypeID() {
return this.#typeID;
}
}
export class DeliveryAdapter{
getDeliverys(){}
getDelivery(id){}
updateDelivery(delivery){}
createDelivery(delivery){}
}