class Notification 
{
  send()
  {
    console.log("Sending Notification ... " );
  }
}

class EmailNotification extends Notification
{
  send()
  {
    console.log("Sending Email ... ");
  }
}

class SMSNotification extends Notification
{
  send()
  {
    console.log("Sneding SMS ...");
  }
}

const notifications = [new EmailNotification(), new SMSNotification()];

 notifications.forEach(n=>n.send);

