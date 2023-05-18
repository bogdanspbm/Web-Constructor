export class Payment {
#id;
#value;
#typeid;
#statusid;
#creationdate;
constructor(json) {
this.#value = json.value;
this.#typeid = json.typeid;
this.#statusid = json.statusid;
this.#creationdate = json.creationdate;
this.#id = json.id;
}
getid() {
return this.#id;
}
getvalue() {
return this.#value;
}
gettypeid() {
return this.#typeid;
}
getstatusid() {
return this.#statusid;
}
getcreationdate() {
return this.#creationdate;
}
}
export class PaymentAdapter{
getPayments(){}
getPayment(id){}
updatePayment(payment){}
createPayment(payment){}
}