class PaymentGateway{
    pay() {
        console.log("Error occurred , must implement pay method")
    }
}
class papal extends PaymentGateway{
    pay() {
        console.log("paypal")
    }
}
class strapi extends PaymentGateway {
  pay() {
    console.log("strapi");
  }
}
class razorpay extends PaymentGateway {
  pay() {
    console.log("razorpay");
  }
}
class PaymentGatewayFactory{
    constructor(type) {
        if (type == "paypal") {
            return new papal()
        }
        if (type == "strapi") {
            return new strapi()
        }
        if (type == "razorpay") {
            return new razorpay()
        }
    }
}

let paymentGateway = new PaymentGatewayFactory('razorpay')
paymentGateway.pay()

