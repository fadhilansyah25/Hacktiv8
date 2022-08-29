# Intro To Modern Javascript

## Variable Declaration

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

### The Problem with var

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

#### Perbedaan var, let, dan const

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

## Tipe Data

Di JavaScript tipe data yang paling umum digunakan adalah:
- number
- string
- boolean

#### Number
Number adalah tipe data yang berisi angka.

```javascript
let height = 20
let width = 30
let area = height * width
console.log(area) //=> 600
```

#### String
String adalah tipe data yang berisi karakter.

```javascript
let name = "John"
console.log(name) //=> John
```

#### Boolean
Boolean adalah tipe data yang berisi true atau false.

```javascript
let isMarried = false
console.log(isMarried) //=> false
```
