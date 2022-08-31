<div align="center">

<h1>Intro To Modern Javascript</h1>

</div>

<br/>

## Deklarasi Variabel

Sebelum ES6 hanya ada satu cara untuk membuat variabel

```javascript
var x // declaration
x = 1 // assignment
```

Sekarang ES6 menambahkan cara baru untuk membuat variabel

```javascript
let x // declaration
x = 1 // assignment
```

```javascript
const x = 1 // declaration
x = 3 // assignment // error
```

### Masalah yang ada pada deklarasi var

var memang terlihat simple, tapi ada beberapa kasus yang sering membuat bingung. beberapa masalah yang ada pada var adalah:

#### Reassign

```javascript
var foo ='hello1'
var foo ='hello2'
console.log(foo) //=> hello
```

#### Hoisting

```javascript
x=10
var x
console.log(x) //=> 10
```

#### Scope

```javascript
var b=2
if (true){
  var b=3
}
console.log(b) //=> 3
```

### Perbedaan var, let, dan const

|           | Redeclare | Hoisting | Block Scope | Create Global Props |
| --------- | --------- | -------- | ----------- | ------------------- |
| **var**   | yes       | yes      | no          | yes                 |
| **let**   | no        | no       | yes         | no                  |
| **const** | no        | no       | yes         | no                  |

Untuk penjelasan lengkapnya bisa langsung ke referensi berikut ini [ES6 var, let, dan const apa bedanya?](https://medium.com/coderupa/es6-var-let-const-apa-bedanya-1cd4daaee9f0)

### Memberi Nama Variabel

Dalam JavaScript dan bahasa programming pada umumnya ada istilah yang dinamakan dengan "reserved keyword", atau kata kunci yang sudah "dibooking" oleh bahasa tersebut.\ Contoh dari reserved word adalah let. Kita tidak bisa menggunakan let sebagai nama variable kita. 

```javascript
let let = "Holaaa" //=> Syntax Error
```

untuk reserved keyword yang lainnya, bisa dilihat di [Lexical grammar - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)

<br/>

## Tipe Data

Di JavaScript tipe data yang paling umum digunakan adalah:
- number
- string
- boolean

### Number
Number adalah tipe data yang berisi angka.

```javascript
let height = 20
let width = 30
let area = height * width
console.log(area) //=> 600
```

### String
String adalah tipe data yang berisi karakter.

```javascript
let name = "John"
console.log(name) //=> John
```

### Boolean
Boolean adalah tipe data yang berisi true atau false.

```javascript
let isMarried = false
console.log(isMarried) //=> false
```

<br/>

## Array

Array adalah tipe data yang berisi banyak nilai.

```javascript
let names = ['John', 'Mary', 'Mark']
console.log(names) //=> ['John', 'Mary', 'Mark']
```

Ada beberapa operasi array yang sering digunakan. Contohnya:

### Merge dua atau lebih array

Menggabungkan 2 array menjadi 1 array baru


```javascript
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = arr1.concat(arr2)
console.log(arr3) //=> [1, 2, 3, 4, 5, 6]
```

### Menghapus item pada array

Jika ingin menghapus item pada array dengan syarat sudah mengetahui indexnya, maka gunakan method splice.

```javascript
let arr = [1, 2, 3, 4, 5]
arr.splice(2, 1) //=> [3]
console.log(arr) //=> [1, 2, 4, 5]
```

### Mengosongkan array

untu menghapus semua item pada array ada 2 cara yang dapat digunakan:

Cara pertama dengan mengosongkannya langsung:

```javascript
var arr1 = ['a','b','c','d','e','f'];
var arr2 = arr1;  // Reference arr1 by another variable 
arr1 = [];
console.log(arr2); // Output ['a','b','c','d','e','f']
```

Cara kedua dengan menggunakan method splice:

```javascript
let arr = [1, 2, 3, 4, 5]
arr.splice(0, arr.length) //=> []
console.log(arr) //=> []
```

### Array multidimensi

Array multidimensi adalah array yang berisi array.

```javascript
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr) //=> [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
