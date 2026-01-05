

class Command {
  execute() {
    throw new Error("execute() must be implemented");
  }
}
class CancelOrderCommand extends Command{
    constructor(service, id) {
        super()
        this.id = id
        this.service = service
    }
    execute() {
        this.service.cancel(this.id)
    }
}
class PlaceOrderCommand extends Command {
  constructor(service, id) {
    super();
    this.id = id;
    this.service = service;
  }
  execute() {
    this.service.place(this.id);
  }
}
class OrderService{
    place(id) {
        console.log("order placed")
    }
    cancel(id) {
        console.log("order cancelled")
    }
}
class OrderInvoker {
    invoke(command) {
       command.execute() 
    }
}

const service = new OrderService()
const invoker = new OrderInvoker()

const cancelCmd = new CancelOrderCommand(service, 102)
const placeCmd = new PlaceOrderCommand(service, 102)
invoker.invoke(placeCmd);
invoker.invoke(cancelCmd)
