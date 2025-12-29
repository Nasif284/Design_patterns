class PaymentGateway {
  pay() {
    console.log("Error occurred , must implement pay method");
  }
}

class StripeApi{
    makePayment() {
        console.log("payment done")
    }
}

class StripeAdapter extends PaymentGateway{
    constructor() {
        super()
        this.stripe = new StripeApi()
    }
    pay() {
        this.stripe.makePayment()
    }
}

let ad = new StripeAdapter()
ad.pay()