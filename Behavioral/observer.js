class observer{
    update() {
        console.log("update method must be implemented")
    }
}
class EmailObserver extends observer{
    update(order) {
        console.log("updated for change in order")
    }
}
class AnalyticsObserver extends observer {
  update(order) {
    console.log("updated for change in order");
  }
}

class OrderService{
    constructor() {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }
    unSubscribe(observer) {
        this.observers = this.observers.filter((o) => 0 !== observer)
    }
    notify(order) {
        this.observers.forEach((observer) => {
            observer.update(order)
        })
    }
    placeOrder(id) {
        this.notify(id)
    }
}

let order = new OrderService()
order.subscribe(new EmailObserver)
order.subscribe(new AnalyticsObserver)
order.placeOrder(12)