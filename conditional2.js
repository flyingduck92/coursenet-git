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

/*
  CASE 2 - SWITCH CASE 
  A Vending Machine could accept a string input and gives drinks the following:
  1. Sweet Tea
  2. Plain Tea
  3. Boba
  4. Milk Coffee
  5. Choco Tea
  If the buyer choose Sweet Tea, it will gives an output "You choose sweet tea. Thanks." 
  Please make the algorithm or pseudocode and JS code

  - PSEUDOCODE
  BEGIN 
    STORE chosen_drink WITH ANY STRING

    IF chosen_drink EQUAL "Sweet Tea"
      SHOW "You choose Sweet Tea. Thanks." 
    ELSE IF chosen_drink EQUAL "Plain Tea
      SHOW "You choose Plain Tea." 
    ELSE IF chosen_drink EQUAL "Boba"
      SHOW "You choose Boba. Thanks." 
    ELSE IF chosen_drink EQUAL "Milk Coffee"
      SHOW "You choose Milk Coffee. Thanks." 
    ELSE IF chosen_drink EQUAL "Choco Tea"
      SHOW "You choose Choco Tea. Thanks."
    ELSE 
      SHOW "Error: please contact the provider" 
  END
*/

let chosen = "Sweet Tea"

switch (chosen) {
  case "Sweet Tea":
    console.log(`You choose ${chosen}. Thanks.`)
    break
  case "Plain Tea":
    console.log(`You choose ${chosen}. Thanks.`)
    break
  case "Boba":
    console.log(`You choose ${chosen}. Thanks.`)
    break
  case "Milk Coffee":
    console.log(`You choose ${chosen}. Thanks.`)
    break
  case "Choco Tea":
    console.log(`You choose ${chosen}. Thanks.`)
    break
  default:
    console.log("Error: please contact the provider")
    break
}

/* 
  CASE 3 - IF-ELSE MULTIPLE CONDITIONS
  Level classification for playable character in a game are the followings:

  Interval              Status
  --------------------------------
  More than 100         Expert
  Between 70 and 100    Pro
  Between 50 and 70     Normal
  Between 30 and 50     Basic
  Less than 30          Beginner

  Please process the classifications if Power of the playable character is 75,
  then the result is "Character is Pro" 

  - PSEUDOCODE
  BEGIN 
    STORE char_power WITH ANY VALUE

    IF char_power ABOVE 100
      SHOW "Character is Expert." 
    ELSE IF char_power ABOVE 70 AND char_power BELOW OR EQUAL TO 100
      SHOW "Character is Pro." 
    ELSE IF char_power ABOVE 50 AND char_power BELOW OR EQUAL TO 70
      SHOW "Character is Normal" 
    ELSE IF char_power ABOVE 30 AND char_power BELOW OR EQUAL TO 50
      SHOW "Character is Basic" 
    ELSE IF char_power BELOW OR EQUAL TO 30
      SHOW "Character is Beginner"
  END

*/

let char_power = 71

if (char_power > 100) {
  console.log("Character is Expert")
} else if (char_power > 70 && char_power <= 100) {
  console.log("Character is Pro")
} else if (char_power > 50 && char_power <= 70) {
  console.log("Character is Normal")
} else if (char_power > 30 && char_power <= 50) {
  console.log("Character is Basic")
} else if (char_power <= 30) {
  console.log("Character is Beginner")
}