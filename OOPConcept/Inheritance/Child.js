// importing the parent class

import Parent from "./Parent.js";   // extends : used to inherit properties and method of parent class

class Child extends Parent {
  constructor(name, age, grade) {
    // call the parent class constructor using super
    super(name, age);
    this.grade = grade;8
    
  }

  // method to get child details
  getChildDetails() {
    const parentDetails = super.getDetails();
    return `${parentDetails}, Grade: ${this.grade}`;
  }
}

// export the child details
export default Child;
