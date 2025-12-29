class Notification{
    send() {
        console.log("Error")
    }
}
class BaseNotification extends Notification{
    send() {
        console.log("message send")
    }
}
class NotificationDecorator extends Notification{
    constructor(notification) {
        super()
        this.notification = notification
    }
    send() {
        this.notification.send()
    }
}
class EmailNotifyDecorator extends NotificationDecorator{
    send() {
        super.send()
        console.log("Email send")
    }
}
class SmsDecorator extends NotificationDecorator{
    send() {
        super.send()
        console.log("sms send ")
    }
}

let notification = new BasicNotification();
notification = new EmailDecorator(notification);
notification = new SMSDecorator(notification);

notification.send("Order placed");

