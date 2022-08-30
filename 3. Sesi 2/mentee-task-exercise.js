// Object
// const user = {};
// user.name = "Fadil Ardiansyah";
// user.age = 20;
// user.address = "Jl. Raya Ciputat";

// console.log(user);

// Practice
const students = [
  {
    username: "Arrizal",
    scores: [90, 80, 60, 100],
    gender: "male",
  },
  {
    username: "Meimei",
    scores: [90, 80, 80, 80],
    gender: "female",
  },
  {
    username: "Jack",
    scores: [40, 10, 15, 60],
    gender: "male",
  },
];

students.forEach((student) => {
  // greating text
  const greating = `${student.gender === "male" ? "Mr." : "Mrs."} ${
    student.username
  } report card`;

  // average score calculation
  const averageScore =
    student.scores.reduce((acc, cur) => acc + cur, 0) / student.scores.length;

  // status text
  const status = averageScore >= 70 ? "PASSED" : "FAILED";

  //   report card
  console.log("============================");
  console.log(greating);
  console.log(`average score: ${averageScore}`);
  console.log(`status: ${status}`);
  console.log("============================");
});
