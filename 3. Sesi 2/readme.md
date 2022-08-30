# Sesi 2 Javascript Lanjutan

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

## A bit functional side of JavaScript

Higher-order function and callback function

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Higher-Order Functions(HoF) and Callback Functions(CB) are different.<br><br>- HoF: A function that takes another function(s) as an argument(s) and/or returns a function to the caller.<br>- CB: A function that is passed to another function.<br><br>Usages? More coming on this topic. Stay tuned. <a href="https://t.co/P0nt0jVmH8">pic.twitter.com/P0nt0jVmH8</a></p>&mdash; Tapas Adhikary (@tapasadhikary) <a href="https://twitter.com/tapasadhikary/status/1473596864096309252?ref_src=twsrc%5Etfw">December 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
