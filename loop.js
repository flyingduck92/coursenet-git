/* For loop */
for (let i = 0; i < 3; i++) {
  console.log(i)
}

/* While loop */
let i = 0
while (i < 3) {
  console.log('Hello !')
  i++
}

/* While-if loop */
let k = 0, status = true
while (_status) {
  console.log(k)
  i++
  if (k > 5) {
    _status = false
  }
}

/* Nested loop */
let temp = ''
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    temp += 'x'
  }
  console.log(temp)
  temp = ''
}