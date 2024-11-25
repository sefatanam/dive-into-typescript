class Employee {
  static employeeCount = 0;

  constructor(name) {
    this.name = name;
    Employee.employeeCount++;
  }

  static getEmployeeCount() {
    return Employee.employeeCount;
  }
}


const emp1 = new Employee('John');
const emp2 = new Employee('Doe');
const emp3 = new Employee('Yaha');
const emp4 = new Employee('Yaha');
console.info(Employee.getEmployeeCount());
