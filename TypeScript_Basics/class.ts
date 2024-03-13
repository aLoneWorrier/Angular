class Employee {
  #id: number;
  protected name: string;
  address: string;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  getNameAndAdress(): string {
    return `${this.name} stays at -> ${this.address}`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameAndAdress2(): string {
    return `${this.name} is a manager at -> ${this.address}`;
  }
}
let john = new Employee(1, "John", "Highway 71");
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';

console.log(john);
console.log(john.getNameAndAdress());
console.log(Employee.getEmployeeCount());
john.empId = 20;
console.log(john.empId);

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike);
console.log(mike.getNameAndAdress());
console.log(mike.getNameAndAdress2());
