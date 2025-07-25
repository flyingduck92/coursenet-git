/* 
  CASE 1 - RECTANGLE AREA

  - ALGORITHM
    1. make variable panjang with any value
    2. make variable lebar with any value
    3. make variable area with lebar MULTIPLY panjang
    4. display the result of area

  - PSEUDOCODE 

  BEGIN 
    STORE panjang WITH ANY NUMBER (10)
    STORE lebar WITH ANY NUMBER (5)

    STORE area WITH panjang MUL lebar
    SHOW area
  END
*/

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

/* 
  CASE 3 - VOLUME OF HALF-SPHERE 

  - ALGORITHM
    1. make variable constant PHI with 3.14
    2. make variable radius (r)
    3. make variable valume with (2/3) MULTIPLY phi MULTIPLY CUBE of radius(r*r*r)
    4. display the result of volume

  - PSEUDOCODE 
    
  BEGIN
    STORE phi WITH 3.14
    STORE r WITH ANY NUMBER (5)
    STORE volume WITH (2/3) MUL phi MUL r MUL r MUL r

    SHOW volume
  END
  
*/

/* 
  CASE 4 - SURFACE AREA OF CYLINDER

  - ALGORITHM (curved surface area + 2 circular bases)
    1. make variable constant PHI with 3.14
    2. make variable radius (r) with any value
    3. make variable height (h) with any value
    4. make CIRCLE_AREA with phi MULTIPLY BY SQUARED of radius(r*r)
    5. make CURVED_AREA with 2 MULTIPLY phi MULTIPLY radius(r) MULTIPLY height(h)
    6. make ALL_SURFACE with 2 MULTIPLY circle_area ADD curved_area 
    7. display ALL_SURFACE

  - PSEUDOCODE 
    
  BEGIN
    STORE phi WITH 3.14
    STORE r WITH ANY NUMBER (5)
    STORE h WITH ANY NUMBER (10)

    STORE circle_area WITH phi MUL r MUL r
    STORE curved_area WITH 2 MUL phi MUL r MUL h

    STORE all_surface WITH 2 MUL circle_area ADD curved_area

    SHOW all_surface
  END
  
*/

/* 
  CASE 5 - SURFACE AREA OF CUBOID

  - ALGORITHM ()
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