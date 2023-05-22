export class Order {
#id;
#displaynumber;
#userid;
#statusid;
#cancelreasonid;
#paymentid;
#creationdate;
#modificationdate;
constructor(json) {
this.#userid = json.userid;
this.#statusid = json.statusid;
this.#cancelreasonid = json.cancelreasonid;
this.#paymentid = json.paymentid;
this.#creationdate = json.creationdate;
this.#modificationdate = json.modificationdate;
this.#id = json.id;
this.#displaynumber = json.displaynumber;
}
getuserid() {
return this.#userid;
}
getstatusid() {
return this.#statusid;
}
getcancelreasonid() {
return this.#cancelreasonid;
}
getpaymentid() {
return this.#paymentid;
}
getcreationdate() {
return this.#creationdate;
}
getmodificationdate() {
return this.#modificationdate;
}
getid() {
return this.#id;
}
getdisplaynumber() {
return this.#displaynumber;
}
}
export class OrderAdapter{
getOrders(){}
getOrder(id){}
updateOrder(order){}
createOrder(order){}
}