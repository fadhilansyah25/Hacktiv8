 <div align="center">
 
 <h1>Javascript Lanjutan</h1>
 
 </div>

<br/>

## Object

Tipe data object adalah tipe data yang dapat menampung berbagai tipe data menggunakan property atau key-value, termasuk dengan tipe data array

contoh deklarasi object:

```javascript
const obj = {
    name: 'John',
    age: 30,
    isMarried: false
}
```

<br/>

## Destructuring

Destructuring adalah memecah object yang banyak memiliki properti menjadi beberapa variabel yang lebih kecil.

```javascript
const obj = {
    name: 'John',
    age: 30,
    isMarried: false
}

const {name, age} = obj;
console.log(name, age); // John 30
```

Destructuring function result yang mengembaikan nilai bentuk object.

```javascript
const getUser = () => {
    return {
        id: '123',
        name: 'John'
    }
}

const {id, name} = getUser();
console.log(id, name); // 123 John
```

Array pun dapat di destructuring menjadi beberapa variabel yang lebih kecil.

```javascript
const csv = "1997, Ford, E350, 3000, blue";
const arr = csv.split(",");
const [year, make, model, price, color] = arr;
console.log(year, make, model, price, color); // 1997 Ford E350 3000 blue
```

<br/>

## This keyword

this adalah keyword yang mengembalikan referensi ke object yang sedang diakses.

```javascript
const user = {
    name: 'John',
    age: 30,
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

user.sayHi(); // Hi, my name is John
```

this seringkali merupakan variabel global. Contohnya jika di front-end atau di browser this dapat merupakan window jika context-nya global.

```javascript
this === window; // true
```

<br/>

## Arrow Function and bind()

Ada beberapa keuntungan menggunakan arrow function. Yang pertama adalah sintaks yang lebih singkat, implicit return dan manajemen this yang lebih bisa diprediksi.

```javascript
function add (a, b) {
    return a + b;
} // function declaration

const add = (a, b) => {
    return a + b;
} // function expression

const add = (a, b) => a + b; // function expression dengan implicit return
```

Di JavaScript this keyword agak susah dimengerti. Ia selalu berubah-ubah sesuai konteksnya. Nah dengan arrow function developer dapat lebih memahami this keyword tersebut dengan cara tidak 'memperdulikan' this. Jadi this yang ada didalam arrow function adalah this yang terakhir sebelum masuk ke function tersebut.

```javascript
function Person() {
    this.age = 0;

    SetInterval(function {
        this.age++;
        console.log(this.age);
    }, 1000);
}

const p = new Person();
```

Jika kode diatas kita jalankan, akan mendapatkan NaN di cetak berulang-ulang. Kenapa? Karena this yang ada didalam anonymous function yang ada di setInterval tidak lagi mengenal this dan this.age. this-nya didalam sudah berbeda dengan this yang diinginkan, yang adalah this milik si Person. Bug ini bisa kita perbaiki dengan tiga cara cara: pertama this kita simpan ke variable lain.

yang pertama this kita simpan ke variable lain.

```javascript
function Person() {
    this.age = 0;

    const self = this;
    SetInterval(function {
        self.age++;
        console.log(self.age);
    }, 1000);
}

const p = new Person();
```

cara kedua, menambahkan method bind()

```javascript
function Person() {
    this.age = 0;

    SetInterval(function () {
        this.age++;
        console.log(this.age);
    }.bind(this), 1000);
}

const p = new Person();
```

cara ketiga, menambahkan arrow function

```javascript
function Person() {
    this.age = 0;

    SetInterval(() => {
        this.age++;
        console.log(this.age);
    } , 1000);
}

const p = new Person();
```

<br/>

## Higher-order function and callback function

Selalu ada kebingungan yang membedakan antara Higher-order Function dengan Callback Function.

- Higher-order Function (HoF): Fungsi yang mengambil fungsi lain sebagai argumen dan/atau mengembalikan fungsi sebagai return value.
- Callback Function (CB): Fungsi yang dijadikan argumen fungsi lain kemudian dipanggil di dalam fungsi tersebut.

```javascript
function HigherOrderFunction(callback) {
    // Do something
    // ...


    callback(); Invoke the callback.

    // ...
    // Do something
}
```

[Higher-Order Functions(HoF) in JavaScript - Explain Like I'm Five](https://blog.greenroots.info/higher-order-functions-in-javascript)

<br/>

## Filter

filter adalah method array yang mengembalikan array yang berisi element yang memenuhi kondisi tertentu.

```javascript
let students = [
  {
    name: "Arrizal",
    isGraduated: true,
    score: 100,
  },
  {
    name: "Mandra",
    isGraduated: false,
    score: 42,
  },
  {
    name: "Ladu singh",
    isGraduated: true,
    score: 80,
  },
  {
    name: "Meimei",
    isGraduated: false,
    score: 51,
  },
];

const graduatedStudent = students.filter(
  (student) => student.isGraduated
);
console.log(graduatedStudent); // [{name: "Arrizal", isGraduated: true, score: 100}, {name: "Ladu singh", isGraduated: true, score: 80}]

```

<br/>

## Reduce

Reduce adalah method array yang mengembalikan sebuah nilai berdasarkan proses penjumlahan dari array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum); // 15
```

<br/>

## Map

Map adalah method array yang mengembalikan sebuah array yang berisi hasil dari proses pemanggilan fungsi pada setiap element array.

```javascript
students = students.map((student) => {
  return {
    ...student,
    name: student.name.toUpperCase(),
    age: 19,
  };
});

console.log(students); // [{name: "ARRIZAL", isGraduated: true, score: 100, age: 19}, {name: "MANDRA", isGraduated: false, score: 42, age: 19}, {name: "LADU SINGH", isGraduated: true, score: 80, age: 19}, {name: "MEIMEI", isGraduated: false, score: 51, age: 19}]
```