<div align="center">

<h1>Javascript OOP</h1>

</div>

<br/>

## Class

Class adalah template untuk membuat object. Satu class mempunyai satu atau lebih properti atau fungsi. Satu class dapat menghasilkan banyak object. Semua object mempunyai properti dan fungsi yang sama.

```javascript
class Employee {

  // class method
  doWork() {
    return "Completed work";
  }
}

// create object instance
var e1 = new Employee();
e1.doWork(); // "Completed work"
```

Pada kode diatas Employee merupakan blue print dari object yang akan dibuat. Sedangkan e1 adalah object instance dari Employee.

<br/>

## Constructor

Constructor adalah method yang akan dijalankan ketika object dibuat. Mirip seperti mendeklarasikan method, bedanya constructor ini secara otomatis akan dijalankan pada saat inisialisasi class. Dan didalam constructor ini kita bisa mendeklarasikan properties yang akan digunakan didalam class dengan keyword this.

```javascript
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // class method
  doWork() {
    console.log(`${this.name} is working`);
  }
}

// create object instance
var e1 = new Employee("John", 30);
e1.doWork(); // "John is working"
```

<br/>

## Class Inheritance and Overriding

Inheritance adalah pewarisan properti dan method dari class parent ke class child. Class yang mengcopy properti dan method dari class lain bisa dibilang sebagai class child. sedangkan class yang di copy properti dan method oleh class disebut sebagai class parent.

Class yang dapat menjadi parent class adalah class yang dibuat dengan keyword class. Class yang dapat menjadi child class adalah class yang dibuat dengan keyword class dan menggunakan keyword extends.


```javascript
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // class method
  doWork() {
    console.log(`${this.name} is working`);
  }
}

class Programmer extends Employee {
  constructor(name, age, language) {
    super(name, age); // call parent constructor
    this.language = language;
  }

  // override class method (polymorphism concept)
  doWork() {
    super.doWork(); // call parent method
    console.log(`${this.name} is programming in ${this.language}`);
  }
}

class Designer extends Employee {
  constructor(name, age, tool) {
    super(name, age); // call parent constructor
    this.tool = tool;
  }

  // override class method (polymorphism concept)
  doWork() {
    super.doWork(); // call parent method
    console.log(`${this.name} is designing with ${this.tool}`);
  }
}

// create object instance
var p1 = new Programmer("John", 30, "JavaScript");
p1.doWork(); // "John is working" /n "John is programming in JavaScript"

var d1 = new Designer("Mary", 25, "Photoshop");
d1.doWork(); // "Mary is working" /n "Mary is designing with Photoshop"
```

### Polymorphism OOP in Javascript

Pada kode diatas kita bisa melihat bahwa pada class Programmer dan Designer memiliki method doWork yang berbeda. Namun kita bisa memanggil method doWork pada object instance pada class Programmer dan Designer dengan cara yang sama. ini bisa disebut sebagai polymorphism.

> ...
> Note: penjelasan mengenai polymorphism dapat dibaca pada artikel ini:
> - [Polymorphism in javacript - geeksforgeeks.org](https://https://www.geeksforgeeks.org/polymorphism-in-javascript/)
> - [Pengertian Polimorfisme Dalam Pemrograman Java - dicoding.com](https://www.dicoding.com/blog/pengertian-polimorfisme-dalam-pemrograman-java/)
> - [Polymorphism in JavaScript - deftstack.com](https://www.delftstack.com/howto/javascript/polymorphism-in-javascript/)

### Super keyword

Perhatikan pada kode diatas, terdapat keyword super pada class inheritance. Super berfungsi untuk mengcopy properti dan method dari class parent ke class child.

Keyword super juga dapat digunakan untuk mengakses method dari class dan memanggilnya langsung di dalam method class child.

<br/>

## Class Static Initialization

Static keyword merupakan pendefinisian metode atau properti statis untuk class. Static method maupun Static property tidak dapat dipanggil pada instance kelas. Mereka hanya dapat diakses atau dipanggil melalui blueprint class itu sendiri.

```javascript
class Car {
    static tireCount = 4;

    static getCompany() {
        return "BMW";
    }
}

const c1 = new Car();
c1.tireCount; // undefined
c1.getCompany(); // undefined

console.log(Car.tireCount); // 4
console.log(Car.getCompany()); // BMW
```

Pada kode diatas bisa dilihat jika instance object dari class memanggil method atau properti statis, maka akan mengembalikan nilai undefined.

<br/>

## Encapsulation in a Javascript class

### Private Property

Private properti adalah properti yang hanya dapat diakses oleh method dari class itu sendiri.

```javascript
class Car {
    #tireCount = 4;
    #company = "BMW";

    getTireCount() {
        return this.#tireCount;
    }

    getCompany() {
        return this.#company;
    }

    setTireCount(count) {
        this.#tireCount = count;
    }
}

const c1 = new Car();
console.log(c1.#tireCount); // undefined
console.log(c1.#company); // undefined
c1.#tireCount = 5 // error
c1.getTireCount(); // 4
c1.setTireCount(6); // 6
```

### Private Method

Private method adalah method yang hanya dapat diakses oleh method dari class itu sendiri.

```javascript
class Car {
    #tireCount = 4;
    #company = "BMW";

    getTireCount() {
        return this.#tireCount;
    }

    #clutch() {
        console.log("Clutching...");
    }

    getClutch() {
        this.#clutch();
    }
}

const c1 = new Car();
c1.clutch(); // Error
c1.getClutch(); // Clutching...
```