// Buatlah sebuah fungsi dengan nama makeAllCaps yang menerima sebuah parameter 
// yang adalah array dan me-return promise baru yang membuat semua komponen array 
// menjadi huruf kapital semua. Gunakan fungsi map untuk membuat fungsi makeAllCaps.

// Kemudian, buat satu buah fungsi lagi dengan nama sortWords yang menerima 
// sebuah parameter dalam bentuk array yang akan me-return promise baru yang mensortir array tersebut

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
