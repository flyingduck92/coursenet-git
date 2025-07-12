// let coffees = ['Arabica', 'Robusta', 'Mix Blend']

// console.log(`Coffee list (${coffees.length}):`)
// for (let i = 1; i <= coffees.length; i++) {
//   console.log(`${i}. ${coffees[i]}`)
// }

/*
  Diketahui:
  let students = [
    [1,"Vincent",3.5],
    [2,"Udin",3.0],
    [3,"Mamang",2.1],
  ]

  Bikin kode yang hasilnya
    1. Vincent, IPK = 3.5, Lulus
    2. Udin, IPK = 3.0, Lulus
    3. Mamang, IPK = 2.1, Gagal
*/

// let students = [
//   [1, "Vincent", 3.5],
//   [2, "Udin", 3.0],
//   [3, "Mamang", 2.1],
// ]

// for (let student of students) {
//   let result = student[2] >= 3.0 ? 'Lulus' : 'Gagal'
//   student = `${student[0]}. ${student[1]}, IPK = ${student[2]}, ${result}`
//   console.log(student)
// }

/* 
  Study Case 1
  Hitung jumlah dari semua value / isi array
  dan cari rata2nya

  let scores = [5, 2, 3, 1, 7, 8, 10, 12, 17]
  
  Result:
  Mean = 7.22
  */

// let scores = [5, 2, 3, 1, 7, 8, 10, 12, 17]
// let result = 0
// for (let val of scores) {
//   result += val
// }
// result /= scores.length

// let result = scores.reduce((total, value) => total + value, 0) / scores.length

// console.log(`Result:
// Mean = ${result.toFixed(2)}`)

/* 
  Study Case 2
  Pecah semua karakter dalam string menjadi array

  Diketehui: 
    let str = "makan"
  
  Result: 
    ['m','a','k','a','n']  
*/

// let str = 'makan'
// let toArr = []
// for (let letter of str) {
//   toArr.push(letter)
// }

// console.log(toArr)

let str = 'makan nasi kotak'
let toArr = []
let word = ''

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    word += str[i]
  } else {
    toArr.push(word)
    word = ''
  }
}
// push last word
if (word) {
  toArr.push(word)
}

console.log(toArr)

/* 
  Study Case 3
  Pecah semua karakter dalam string menjadi array

  Diketehui: 
    let watches = ["Swiss Army","Hublot","Patek Philippe"]
    
    Result: 
    Saya punya Swiss Army, Hublot, dan Patek Philippe
    
    Diketehui: 
    let watches = ["A","B","C","D","E"]
    
    Result: 
    Saya punya A,B,C,D, dan E
*/

let watches = ["Swiss Army", "Hublot", "Patek Philippe"]
let result = 'Saya punya '
for (let i = 0; i < watches.length; i++) {
  if (i == watches.length - 1) {
    result += `dan ${watches[i]}`
  } else {
    result += `${watches[i]}, `
  }
}

console.log(result)

let alphabeth = ["A", "B", "C", "D", "E"]
let iHave = 'Saya punya '
for (let i = 0; i < alphabeth.length; i++) {
  if (i == alphabeth.length - 1) {
    iHave += `dan ${alphabeth[i]}`
  } else {
    iHave += `${alphabeth[i]}, `
  }
}

console.log(iHave)