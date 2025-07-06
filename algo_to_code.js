/* 
  CASE 1 - VOLUME OF CUBE

  - ALGORITHM
    1. make variable length with any number
    2. make variable volume_cube with multiplying length 3 times by itself
    4. display volume_cube

  - PSEUDOCODE 
    
  BEGIN
    STORE length WITH ANY NUMBER (5)
    STORE volume_cube WITH length MUL length MUL length

    SHOW volume_cube
  END
  
*/

// Volume of Cube
let length = 5
let volume_cube = length * length * length
console.log(volume_cube)



/* 
  CASE 2 - AREA OF CIRCLE

  - ALGORITHM
    1. make variable constant PHI with 3.14
    2. make variable radius (r)
    3. make variable area with phi MULTIPLY SQUARED of radius (r*r)
    4. display the result of area

  - PSEUDOCODE 
    
  BEGIN
    STORE phi WITH 3.14
    STORE r WITH ANY NUMBER (5)
    STORE area WITH phi MUL r MUL r

    SHOW area
  END
  
*/


// Area of Circle
const PHI = 3.14
let r = 5
let area_circle = PHI * r * r
console.log(area_circle)