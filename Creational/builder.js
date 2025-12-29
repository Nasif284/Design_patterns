class Order{
    constructor(builder) {
        this.id = builder.id
        this.product = builder.product
        this.address = builder.address
        this.payment = builder.payment
    }
}

class OrderBuilder{
    setId(id) {
        this.id = id
        return this
    }
    setProduct(product) {
        this.product = product
        return this
    }
    setAddress(address) {
        this.address = address
        return this
    }
    setPayment(payment) {
        this.payment = payment
        return this
    }
}
let order = new OrderBuilder().setId("123").setProduct("shoe").setPayment("online").setAddress("klj;l")
console.log(order)