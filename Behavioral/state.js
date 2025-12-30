class State {
    getStatus() {
        console.log("getStatus() method should be implemented");
    }
    next() {
        console.log("next() method should be implemented"); 
    }
}
class PendingState extends State{
    getStatus() {
        console.log("Pending")
    }
    next(order) {
        order.setState(new PaidState())
    }
}
class PaidState extends State {
  getStatus() {
    console.log("paid");
  }
  next(order) {
    order.setState(new ShippedState());
  }
}
class ShippedState extends State {
  getStatus() {
    console.log("Shipped");
  }
  next(order) {
    order.setState(new DeliveredState());
  }
}
class DeliveredState extends State {
  getStatus() {
    console.log("Delivered");
  }
  next(order) {
    console.log("Product already delivered")
  }
}

class OrderService{
    constructor() {
        this.state = new PendingState()
    }
    setState(state) {
        this.state = state
    }
    changeState() {
        this.state.next(this)
    }
    getStatus() {
        this.state.getStatus()
    }

}
let order = new OrderService()
order.getStatus()
order.changeState()
order.changeState();
order.getStatus()