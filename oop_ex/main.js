import Kitchen from './Kitchen.js'

let kitchen = new Kitchen()
// name, price, ingredients, type
kitchen.bake('Chocolate Sweety', 50000, ['Chocolate', 'Sugar', 'Flour',], 'Chocolate')
kitchen.bake('Brownies Cakep', 80000, ['Chocolate', 'Sugar', 'Flour', 'Eggs'], 'Chocolate')
kitchen.bake('Sweet Butter', 80000, ['Butter', 'Sugar', 'Flour', 'Eggs'], 'Sweet')
kitchen.bake('Red Velvet', 80000, ['Food colouring (Red)', 'Sugar', 'Flour', 'Eggs', 'Strawberry Syrup'], 'Strawberry')
kitchen.bake('Berry Cake', 80000, ['Diced Strawberry', 'Sugar', 'Flour', 'Eggs'], 'Strawberry')
kitchen.showCookies()

console.log('\n\n')
// delete id 2 and 4
kitchen.eat(2)
kitchen.eat(4)
kitchen.showCookies()

console.log('\n\n')
// edit id 2 and 4
kitchen.addSugar(1)
kitchen.addSugar(3)

console.log('\n\n')
kitchen.showCookies()