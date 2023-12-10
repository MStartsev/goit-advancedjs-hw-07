/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    department: string,
    salary: number,
    protected bonus: number = 10000
  ) {
    super(name, department, salary + bonus);
  }

  setBonus(newBonus: number): void {
    this.bonus = newBonus;
  }
}

// Example usage

const employee = new Employee("John Dirr", "IT", 150000);
console.log(employee.getEmployeeDetails()); // Name: John Dirr, Department: IT, Salary: 150000
console.log(`Employee name: ${employee.name}`); // Employee name: John Dirr
// console.log("Department: ", employee.department); //Compiler Error
// console.log("Salary: ", employee.salary); //Compiler Error

const manager = new Manager("Jane Dirr", "Management", 105000);
console.log(manager.getEmployeeDetails()); // Name: Jane Dirr, Department: Management, Salary: 115000

export {};
