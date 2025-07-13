/* Hoisting */

/* Variable hoisting */
x = 1
// console.log(`x is ${x}`)
var x

// console.log(hello)
// var hello

// console.log(hello)
// let hello

/* let/const/var */
const number = { name: 'Steven' }
number.name = 'Justin'
// console.log(number.name)

/* Function hoisting */
a = 5
b = 6
// console.log(sum(a, b))

var a, b
function sum(x, y) {
  return x + y
}


/* 
              var vs let vs const 
  reassign    ✅    ✅     ❌
  redeclare   ✅    ❌     ❌
  immutable   ❌    ❌     ✅
  
                declaration vs expression vs arrow function
  Hoisting         ✅             ❌            ❌
  Syntax          Long            Short         Short
*/

let numbers = [1, 3, 4]
numbers.forEach((val, idx) => {
  // console.log(`${idx} is ${val}`)
})

const products = [
  { name: "Kemeja", price: 250000 },
  { name: "Celana Pendek", price: 50000 },
  { name: "Sepatu", price: 80000 },
]

const formatter = new Intl.NumberFormat('id', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
})


// products.forEach((product, index) => {
// console.log(`${index + 1}. ${product.name} harganya ${product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}`)
// console.log(`${index + 1}. ${product.name} harganya ${formatter.format(product.price)}`)
// })

// console.log(`Filtered price >= Rp. 80.000`)
const filteredProduct = products.filter(element => element.price >= 80000)
// filteredProduct.forEach(item => {
//   console.log(`${item.name} ${formatter.format(item.price)}`)
// })

/* Filter */
const angka = [1, 2, 3, 4, 5, 6]
const genap = angka.filter(x => x % 2 == 0)
const lessthanthree = angka.filter(x => x < 3)
// console.log(genap)
// console.log(lessthanthree)

/* Map */
const myNumber = [1, 2, 3, 4, 5, 6]
const doubles = myNumber.map(item => item * 2)
// console.log(myNumber)
// console.log(doubles)

// const products2 = [
//   { name: "Kemeja", price: 250000 },
//   { name: "Celana Pendek", price: 50000 },
//   { name: "Sepatu", price: 80000 },
// ]

// const formatter2 = new Intl.NumberFormat('id')

// const toNewArray = products2.map(item => `${item.name} harganya Rp. ${formatter2.format(item.price)}`)
// console.log(toNewArray)

const products3 = [
  { name: "Kemeja", price: 250000 },
  { name: "Celana Pendek", price: 50000 },
  { name: "Sepatu", price: 80000 },
]
const newItem = {
  name: "Tas",
  price: 300000
}
// products3 = [...products3, newItem]

// products3.push(newItem)
// console.log(products3)
// products3.pop()
// console.log(products3)


/* CRUD - CREATE, READ, UPDATE, DELETE */
let students = [
  {
    id: 1,
    name: "Jon",
    major: "Economic",
    isGraduated: true
  },
  {
    id: 2,
    name: "Jenny",
    major: "Biology",
    isGraduated: false
  },
]

// FUnction to Read
function showStudents() {
  console.log('Student list: ')
  students.forEach(student => {
    const status = student.isGraduated === true ? '✅' : '❌'
    const display = `${student.id}. ${status} ${student.name}, ${student.major}`
    console.log(display)
  })
}

/* FUnction to Insert */
function addStudent(name, major) {
  const newId = students.length + 1
  const isGraduated = false

  const newStudent = {
    id: newId,
    name,
    major,
    isGraduated
  }

  students = [...students, newStudent]
}

function updateStudent(id, name = '') {
  let updatedStudent = students.filter(student => {
    if (student.id === id) {
      student.name = name
    }
    return student
  })

  students = updatedStudent
}


function deleteStudent(id) {
  students = students.filter(student => student.id != id)
}


showStudents()
addStudent('Tony', 'Military Tech')
showStudents()
updateStudent(2, "Lina")
showStudents()
deleteStudent(1)
showStudents()