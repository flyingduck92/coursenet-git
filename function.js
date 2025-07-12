function checkPlateNumber(num_plate) {
  let plate_result
  if (num_plate % 2 === 0) {
    plate_result = 'Genap'
  } else {
    plate_result = 'Gasal'
  }
  return plate_result
}

let plate_result = checkPlateNumber(666)
console.log(`Plat nomer anda bilangan ${plate_result}`)

/* 
  Make 2 function:
    1. Change string into array 
    2. Count the elements in an array 

  Input: "Hello Good Morning"  
*/
function strToArr(string) {
  // let word = ''
  // let arr = []
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] !== ' ') {
  //     word += string[i]
  //   } else {
  //     arr.push(word)
  //     word = ''
  //   }
  // }
  // // push last word to array
  // if (word) {
  //   arr.push(word)
  // }

  let arr = string.split(" ")
  return arr
}

function countArrElement(string) {
  let arr = strToArr(string)
  return arr.length
}

let theStr = "Hello Good Morning"
let result = countArrElement(theStr)
console.log(`String "${theStr}" gives array result: ${result}`)