/*
  CASE 1
  Check a number is odd or even
  Please make the algorithm, pseudocode and JS code
*/

/*
  - ALGORITHM
  1. make variable x with any number
  2. check x if x modulo by 2 is 0 then x is even
  3. otherwise x is odd

  - PSEUDOCODE
  BEGIN
    STORE x WITH ANY NUMBER
    CHECK x
    IF x MOD 2 IS ZERO
      THEN x is Even
    ELSE
      THEN x is Odd
  END

*/
// CODING
let myNumber = 5
if (myNumber % 2 === 0) {
  console.log(`myNumber (${myNumber}) is Even`)
} else {
  console.log(`myNumber (${myNumber}) is Odd`)
}

