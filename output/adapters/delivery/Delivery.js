import * as library from "./../../library/RequestLibrary.js"
export class Delivery {
#typeID;
#id;
#orderID;
#addressID;
#targetDate;
constructor(json) {
this.#orderID = json.orderID;
this.#addressID = json.addressID;
this.#targetDate = json.targetDate;
this.#typeID = json.typeID;
this.#id = json.id;
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
getID() {
return this.#id;
}
getOrderID() {
return this.#orderID;
}
}
export class DeliveryAdapter {

    getDeliverys() {
       //  Implement me! 
    }

    getDelivery(id) {
       //  Implement me! 
    }

    updateDelivery(item) {
       //  Implement me! 
    }

    createDelivery(item) {
       //  Implement me! 
    }

}