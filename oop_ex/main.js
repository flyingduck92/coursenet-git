import Kitchen from './Kitchen.js'

let kitchen = new Kitchen()
// name, price, ingredients, type
kitchen.bake('Chocolate Sweety', 50000, ['Chocolate', 'Sugar', 'Flour', 'Butter'], 'Chocolate')
kitchen.bake('Brownies Cakep', 70000, ['Chocolate', 'Sugar', 'Flour', 'Eggs'], 'Chocolate')
kitchen.bake('Sweet Butter', 45000, ['Butter', 'Sugar', 'Flour', 'Eggs'], 'Sweet')
kitchen.bake('Red Velvet', 95000, ['Food colouring (Red)', 'Sugar', 'Flour', 'Eggs', 'Strawberry Syrup'], 'Strawberry')
kitchen.bake('Berry Cake', 150000, ['Diced Strawberry', 'Sugar', 'Flour', 'Eggs'], 'Strawberry')
// kitchen.showCookies()

// console.log('\n\n')
/* delete id 2 and 4 */
// kitchen.eat(2)
// kitchen.eat(4)
// kitchen.showCookies()

// console.log('\n\n')
/* edit id 2 and 4 */
// kitchen.addSugar(1)
// kitchen.addSugar(3)

// console.log('\n\n')
// kitchen.showCookies()

/* Task 5 START */
/* 5A  */
// kitchen.showIngredients(1)
// kitchen.addIngredient(1, ['Fanta', 'Tea'])
// kitchen.showIngredients(1)

// kitchen.categoriesCookiesByIngredient("Butter")

// kitchen.sortCookies("asc")
// kitchen.sortCookies("desc")

kitchen.categoriesCookies()