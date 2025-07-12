// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }

// let i = 0
// while (i < 3) {
//   console.log('Hello !')
//   i++
// }

// let i = 0, status = true

// while (_status) {
//   console.log(i)
//   i++
//   if (i > 5) {
//     _status = false
//   }
// }

/* Nested loop */
let temp = ''
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    temp += 'x'
  }
  console.log(temp)
  temp = ''
}
