class Employee
{
  constructor(name, salary)
  {
    this.name = name;
    this.salary = salary;
  }

  getSalary()
  {
    return this.salary;
  }
}

class Manager extends Employee
{
  constructor(name, salary, bonus)
  {
    super(name, salary);
    this.bonus = bonus;
  }

  getTotalSalary()
  {
    return this.salary + this.bonus;
  }
}

const m = new Manager("Ashok", 50000, 1000);
console.log(m.getTotalSalary());