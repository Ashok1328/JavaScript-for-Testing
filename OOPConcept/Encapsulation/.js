// Encapsulation is the practise of keeping data (properties) and method together inside a class and restricting direct access from outside, helps protected data from unintended changes - (Data Hiding)

class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient Balance");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(1600);
console.log(account.getBalance());
// console.log(account.#balance);         // error private field
