class Payment
{
  pay(amount)
  {
    console.log(`Paying ${amount}`);
    this.#processPayment();
  }

  #processPayment()
  {
    console.log("Payment processed securely");
  }
}

const payment = new Payment();
payment.pay(1000);