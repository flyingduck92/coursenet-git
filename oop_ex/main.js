import Kitchen from './Kitchen.js'

let kitchen = new Kitchen()
// name, price, ingredients, type
kitchen.bake('Chocolate Sweety', 50000, ['Chocolate', 'Sugar', 'Flour', 'Butter'], 'Chocolate')
kitchen.bake('Brownies Cakep', 70000, ['Chocolate', 'Sugar', 'Flour', 'Eggs'], 'Chocolate')
kitchen.bake('Sweet Butter', 45000, ['Butter', 'Sugar', 'Flour', 'Eggs'], 'Sweet')
kitchen.bake('Red Velvet', 95000, ['Strawberry', 'Sugar', 'Flour', 'Eggs', 'Salt'], 'Strawberry')
kitchen.bake('Berry Cake', 150000, ['Strawberry', 'Sugar', 'Flour', 'Eggs', 'Vanilla'], 'Strawberry')

kitchen.showCookies()

console.log('\n\n')
/* delete id 2 and 4 */
kitchen.eat(2)
kitchen.eat(4)
kitchen.showCookies()

console.log('\n\n')
/* edit id 2 and 4 */
kitchen.addSugar(1)
kitchen.addSugar(3)

console.log('\n\n')
kitchen.showCookies()

console.log('\n')

/* Task 5 START */
/* 5a  */
// kitchen.showIngredients(1)
// kitchen.showIngredients(3)

/* 5b */
// kitchen.showIngredients(3)
// kitchen.addIngredient(3, ['Cheese', 'Crushed Peanuts'])
// kitchen.showIngredients(3)

/* 5c */
// kitchen.categoriesCookiesByIngredient("Butter")
// kitchen.categoriesCookiesByIngredient("Strawberry")

/* 5d */
// kitchen.sortCookies("asc")
// kitchen.sortCookies("desc")

/* 5e */
// kitchen.categoriesCookies()

/* Task 5 END */