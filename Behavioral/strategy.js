class PaymentGateway{
    pay() {
        console.log("Error Occurred, must implement pay method")
    }
}

class normal extends PaymentGateway{
    pay() {
        console.log("normal pay")
    }
}
class emi extends PaymentGateway {
  pay() {
    console.log("emi");
  }
}
class PaymentStrategy{
    constructor(strategy) {
        this.strategy = strategy
    }
    changedStrategy(strategy) {
        this.strategy = strategy
    }
    pay() {
         this.strategy.pay()
    }
}

let gateway = new PaymentStrategy(new normal())
gateway.pay()
