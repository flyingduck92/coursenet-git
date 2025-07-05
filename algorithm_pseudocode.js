/* 
  CASE 1 - RECTANGLE AREA

  - ALGORITHM
    1. make variable panjang with any value
    2. make variable lebar with any value
    3. make variable area with lebar MULTIPLY BY panjang
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
    3. make variable area with phi MULTIPLIED BY SQUARED of radius (r*r)
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
    3. make variable valume with (2/3) MULTIPLIED BY phi MULTIPLIED BY CUBE of radius(r*r*r)
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
    
    4. make CIRCLE_AREA with phi MULTIPLIED BY SQUARED of radius(r*r)
    5. make CURVED_AREA with 2 MULTIPLY phi MULTIPLY radius(r) MULTIPLY height(h)
    
    6. make ALL_SURFACE with 2 MULTIPLY circle_area ADD curved_area 

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