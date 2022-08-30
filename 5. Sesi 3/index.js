class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  doWork() {
    // instance method
    console.log(`${this.name} is working really hard`);
  }
  takeABreak() {
    console.log('chilling');
  }
  partner(partnerName) {
    console.log(
      `${this.name} is married to ${partnerName}`
    );
  }
  static running() {
    console.log('run away');
  }
}

class Programmer extends Employee {
  constructor(name, salary) {
    super(name, 'Programmer', salary);
  }
  workout() {
    console.log(`${this.name} is working out`);
  }
  doWork() {
    console.log(`${this.name} is not working really hard`);
  }
}

class Admin extends Employee {
  constructor(name, salary) {
    super(name, 'Admin', salary);
  }
}

class EmployeeFactory {
  static createEmployee(name, position, salary) {
    switch (position) {
      case 'Programmer':
        return new Programmer(name, salary);
      case 'Admin':
        return new Admin(name, salary);
      default:
        break;
    }
  }
}

const scott = new Employee('Scott', 'VP of Tech', 10000000);
// console.log(scott);
// scott.doWork();
// scott.takeABreak();
// scott.partner('Karen');
const arrizal = new Programmer('Arrizal', 15000000);
// console.log(arrizal);
// scott.doWork();
// arrizal.doWork();
// Employee.running();
const ujang = EmployeeFactory.createEmployee(
  'Ujang',
  'Admin',
  5000000
);
const michael = EmployeeFactory.createEmployee(
  'Michael',
  'Programmer',
  10000000
);
// console.log(ujang);
// console.log(michael);

const fetchUsersPromise = () => {
  console.log('jalan');
  fetch('https://randomuser.me/api/?results=1')
    .then((res) => res.json())
    .then((data) => alert(JSON.stringify(data.results)))
    .catch((err) => console.log(err));
};

const fetchUsersAsync = async () => {
  try {
    const res = await fetch(
      'https://randomuser.me/api/?results=1'
    );
    const data = await res.json();
    alert(JSON.stringify(data.results));
  } catch (error) {
    alert(error);
  }
};
const buttonPromise = document.getElementById('promise');
const buttonAsync = document.getElementById('async');
buttonPromise.addEventListener('click', fetchUsersPromise);
buttonAsync.addEventListener('click', fetchUsersAsync);

// fetchUsers();
