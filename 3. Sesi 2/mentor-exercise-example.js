const students = [
  {
    username: 'Arrizal',
    scores: [90, 80, 60, 100],
    gender: 'male',
  },
  {
    username: 'Meimei',
    scores: [90, 80, 80, 80],
    gender: 'female',
  },
  {
    username: 'Jack',
    scores: [40, 10, 15, 60],
    gender: 'male',
  },
];

const gender = 'male';

const determineTitle = (gender) => {
  if (gender === 'male') {
    return 'Mr.';
  } else if (gender === 'female') {
    return 'Mrs.';
  }
};

const calculateAverage = (scores) => {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
};

const determineStatus = (average) => {
  if (average >= 75) {
    return 'PASSED';
  } else {
    return 'FAILED';
  }
};

const generateCard = (data) => {
  const title = determineTitle(data.gender);
  const average = calculateAverage(data.scores);
  const status = determineStatus(average);
  console.log(`
  ============================
  ${title} ${data.username}'s report card
  average score: ${average}
  status: ${status}
  ============================
  `);
};

students.forEach((el) => {
  generateCard(el);
});

/*'
    minimal average score untuk lulus: 75
    =====================
    Mr. arrizal's report card
    average score : 87.5
    status: PASSED
    =====================
    =====================
    Mrs. Meimei's report card
    average score : 80
    status: PASSED
    =====================
    =====================
    Mr. Jack's report card
    average score : 30
    status: FAILED
    =====================
*/
