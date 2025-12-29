class InventoryService {
  check(productId) {
    console.log("Stock checked");
  }
}

class PaymentService {
  pay(amount) {
    console.log("Payment done");
  }
}

class InvoiceService {
  generate() {
    console.log("Invoice generated");
  }
}

class NotificationService {
  send() {
    console.log("Notification sent");
  }
}


class OrderFacade {
  constructor() {
    this.inventory = new InventoryService();
    this.payment = new PaymentService();
    this.invoice = new InvoiceService();
    this.notify = new NotificationService();
  }

  placeOrder(productId, amount) {
    this.inventory.check(productId);
    this.payment.pay(amount);
    this.invoice.generate();
    this.notify.send();
  }
}
const order = new OrderFacade();
order.placeOrder("P101", 500);
