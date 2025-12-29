class PaymentGateway {
  pay() {
    console.log("Error occurred , must implement pay method");
  }
}
class paypal extends PaymentGateway{
    pay() {
        console.log("paypal pay")
    }
    invoice() {
        console.log("paypal invoice")
    }
}
class strapi extends PaymentGateway {
  pay() {
    console.log("strapi pay");
  }
  invoice() {
    console.log("strapi invoice");
  }
}
class paymentFactory{
    pay(){}
    invoice(){}
}

class PaypalFactory extends paymentFactory{
    pay() {
     return new paypal()
    }
    invoice() {
        return new paypal()
    }
}

class StrapiFactory extends paymentFactory {
  pay() {
    return new strapi();
  }
  invoice() {
    return new strapi();
  }
}

function processOrder(factory) {
    let payment = factory.pay()
    let invoice = factory.invoice()
    payment.pay()
    invoice.invoice()
}
processOrder(new PaypalFactory())