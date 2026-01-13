// define parent class
class Parent
{
  constructor(name,age)
  {
      this.name = name;
      this.age = age;
  }

  // method to get the parent details
  getDetails()
  {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// export the parent class
export default Parent;