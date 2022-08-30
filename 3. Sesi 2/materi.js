// const user = {};
// user.name = 'Arrizal';
// user.age = 18;
// user.hobby = 'sleep';

const user = {
  name: "arrizal",
  age: 18,
  hobby: "sleeping",
  address: {
    street: "pasar minggu",
    city: "south jakarta",
    state: "indonesia",
  },

  // // method capitalize
  // capitalize: (str = "tinky winky") => {
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i - 1] === " " || i === 0) {
  //       result += str[i].toUpperCase();
  //     } else {
  //       result += str[i];
  //     }
  //   }

  //   return result;
  // },
};

// const name = user.name;
// const hobby = user.hobby;
const { name: nama, hobby: hobi, address: alamat } = user;

const { city, state, street } = alamat;

const scores = [70, 80, 65, 75, 12];

const [ass1, ass3, ass2, ass4, ass5] = scores;

// console.log(nama, hobi);
//cara 1
// function capitalize(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] === ' ' || i === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

//cara 2
// const capitalize = function (str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] === ' ' || i === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// };

//cara 3
const capitalize = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || i === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

// const anything = (fn, str1, str2) => {
//   let result = fn(str1);
//   result += ` ${str2}`;
//   return result;
// };

// const myVar = anything(
//   capitalize,
//   'arrizal rahmat kurniawan',
//   'keren'
// );

// console.log(myVar);

// const newStreet = user.capitalize(street);
// const newCity = user.capitalize(city);
// const teletubbies = user.capitalize();
// console.log(newStreet);
// console.log(newCity);
// console.log(teletubbies);

// console.log(address);

// console.log(
//   `Hello, my name is ${name} and I love ${hobby}. I live in ${city}, ${state}`
// );

// const clock = () => {
//   console.log('Tick');
// };

// setInterval(clock, 1000);

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

students = students.map((student) => {
  return {
    ...student,
    name: student.name.toUpperCase(),
    age: 19,
  };
});

students.forEach((el) => {
  console.log(el.name);
});

// const graduatedStudent = students.filter(
//   (student) => student.isGraduated
// );

// const initialValue = 0;
// const studentsGrades =
//   students.reduce((prev, curr) => {
//     return prev + curr.score;
//   }, initialValue) / students.length;

// console.log(studentsGrades);

// console.log(graduatedStudent);
