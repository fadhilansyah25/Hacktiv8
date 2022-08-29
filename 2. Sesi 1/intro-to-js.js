let present = 15;
let grade = 85;

// check if the student has passed the exam
// type of data must be number
if (typeof present === "number" && typeof grade === "number") {

  // limit the number of presents to 10 and grade to 100
  if ((present) => 0 && present <= 100 && grade >= 0 && grade <= 100) {

    // present logic
    if (present >= 10) {

      // grading logic
      if (grade > 80 && grade < 100) {
        console.log("Siswa lulus dengan nilai A");
      } else if (grade > 70) {
        console.log("Siswa lulus dengan nilai B");
      } else if (grade > 60) {
        console.log("Siswa lulus dengan nilai C");
      } else if (grade > 50 && present === 15) {
        console.log("Siswa lulus karena kehadiran siswa terpenuhi");
      } else console.log("Siswa tidak lulus");
      // end grading logic

    } else console.log("siswa tidak lulus");
    // end present logic

  } else console.log("nilai tidak valid dan kehadiran tidak valid");
  // end limit logic

} else console.log("inputan harus berupa angka");