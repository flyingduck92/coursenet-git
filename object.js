/* 
  Object
  - serial key-value pairs 

    e.g:
    let object = {
      <key> : <value>,
      <key> : <value>,
      <key> : <value>,
    }
    console.log(student.key)
    console.log(student.key)

  */

let student = {
  name: "Vincent",
  gpa: 3.21,
  isGraduated: true
}

// console.log(student.name)
// console.log(student.gpa)
// console.log(student.isGraduated)
// console.log(student["isGraduated"])

/* Method
    is a function thay live inside an object
*/

let mobil = {
  name: "Civic",
  cc: 5000,
  // method
  startEngine: function () {
    console.log(`${this.name} machine on`)
  }
}

console.log(mobil.name)
console.log(mobil.cc)
mobil.startEngine()