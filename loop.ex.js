/*
  Buat looping angka 1-10
  menggunakan 'for' dan 'while'
*/

/* For */
console.log('For Loop')
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

console.log('=================')

/* While */
console.log('While Loop')
let i = 1
while (i <= 10) {
  console.log(i)
  i++
}
console.log('=================')

/*  CASE 1
    Make a loop with below output:
    
    1 adalah ganjil
    2 adalah genap
    3 adalah ganjil
    ......
    10 adalah genap
*/

let limit = 10
for (let i = 1; i <= limit; i++) {
  let chars = i % 2 === 1 ? 'ganjil' : 'genap'
  console.log(i + ' adalah ' + chars)
}
console.log('=================')

/*  CASE 2
    Make a loop with below output:

    Faktor dari 15; 1 3 5 15
    Jumlah faktor dari 15 ada 4
*/

let number = 15
let theFactors = []
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    theFactors.push(i)
  }
}
console.log(`Faktor dari ${number} adalah ${theFactors}`)
console.log(`Banyaknya angka dari faktor ${number} adalah ${theFactors.length}`)
console.log('=================')

/*  CASE 3
    Check the number is prime

    Faktor dari 15; 1 3 5 15
    Jumlah faktor dari 15 ada 4
*/

let myNumber = 1003
let factors = []
let result
for (let i = 1; i <= myNumber; i++) {
  if (myNumber % i === 0) {
    factors.push(i)
  }
  if (factors.length > 2) {
    result = 'bukan merupakan bilangan prima'
  } else {
    result = 'adalah bilangan prima'
  }
}
console.log(`Faktor dari ${myNumber} adalah ${factors} (${factors.length} angka)`)
console.log(`${myNumber} ${result}`)

/*  CASE 4
    Calculate the factorial of a number 

    Faktorial of 5!: 5*4*3*2*1
    Result is 120     
*/
console.log('=================')
let num = 5
let factorial = []
let total = 1
for (let i = num; i >= 1; i--) {
  factorial.push(i)
  total *= i
}

console.log(`Factorial of ${num}!: ${factorial.join("*")}`)
console.log(`Result is ${total}`)

/*  CASE 5
    Make triagle using stars (*) 

    *      
    **      
    ***      
    ****      
    *****      
*/

let lines = 5
let stars = ''

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= i; j++) {
    stars += '*'
  }
  console.log(stars)
  stars = ''
}