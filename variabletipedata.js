/*
  CASE 1:
  Tentukan algoritma, pseudocode dan coding untuk menghitung Luas Permukaan Balok

  CASE 2:
  Tentukan algoritma, pseudocode dan coding untuk menghitung Massa Jenis suatu benda

  CASE 3:
  Tentukan algoritma, pseudocode dan coding untuk menghitung Volume Tabung
*/

// CASE 1 - Luas Permukaan Balok (Cuboid)
/*
  - ALGORITHM
    1. make variable length(l)
    2. make variable width(w)
    3. make variable height(h)
    4. make top_bottom_face WITH length(l) MULTIPLY width(w) MULTIPLY 2
    5. make right_left_face WITH width(w) MULTIPLY height(h) MULTIPLY 2
    6. make front_back_face WITH length(l) MULTIPLY height(h) MULTIPLY 2
    7. make all_faces WITH top_bottom_face ADD right_left_face ADD front_back_face
    8. display all_faces

  - PSEUDOCODE
    BEGIN
      STORE l WITH ANY NUMBER (4)
      STORE w WITH ANY NUMBER (5)
      STORE h WITH ANY NUMBER (10)

      STORE top_bottom_face WITH l MUL w MUL 2
      STORE right_left_face WITH w MUL h MUL 2
      STORE front_back_face WITH l MUL h MUL 2

      STORE all_faces WITH top_bottom_face ADD right_left_face ADD front_back_face

      SHOW all_faces
    END
*/
// CASE 1 - CODING
let length, width, height
length = 4
width = 5
height = 10

let top_bottom_face = length * width * 2
let right_left_face = width * height * 2
let front_back_face = length * height * 2
let all_faces = top_bottom_face + right_left_face + front_back_face
console.log(+all_faces.toFixed(2))
// console.log(Number(all_faces.toFixed(2)))


// CASE 2 - Massa Jenis Suatu Benda
/*
  - ALGORITHM
    Density Formula : p = m/v

    1. make variable m (mass/massa) with any value
    2. make variable v (volume) with any value
    3. make varible p (density/massa_jenis) WITH m DIV v
    4. show p

  - PSEUDOCODE
    BEGIN
      STORE m WITH ANY NUMBER
      STORE v WITH ANY NUMBER
      STORE p WITH m DIV v
      SHOW p
    END
*/
// CASE 2 - CODING
let m = 310
let v = 3
let p = m / v
console.log(+p.toFixed(2))
// console.log(Number(p.toFixed(2)))


// CASE 3 - Volume Tabung/Cylinder
/*
  - ALGORITHM
    Volume of Cylinder Formula : PHI*r*r*h

    1. make variable PHI WITH VALUE 3.14
    2. make variable r (radius) WITH any value
    3. make varible h (height) WITH any value
    4. make volume_of_cylinder WITH PHI MULTIPLED BY r MULTIPLED BY r MULTIPLED BY h

  - PSEUDOCODE
    BEGIN
      STORE phi WITH 3.14
      STORE r WITH ANY NUMBER
      STORE h WITH ANY NUMBER
      STORE volume_of_cylinder WITH phi MUL r MUL r MUL h 
      SHOW volume_of_cylinder
    END
*/
// CASE 3 - CODING
const phi = +Math.PI.toFixed(2) // 3.14
let cylinder_radius = 5
let cylinder_height = 10
let volume_of_cylinder = phi * cylinder_radius * cylinder_height
console.log(+volume_of_cylinder.toFixed(2))
// console.log(Number(volume_of_cylinder.toFixed(2)))
