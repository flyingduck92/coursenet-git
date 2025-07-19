import Chocolate from './Chocolate.js'
import Sweet from './Sweet.js'
import Strawberry from './Strawberry.js'

class Kitchen {
  constructor(container) {
    this.container = container || []
  }

  // create
  bake(name, price, ingredients, type) {
    let id
    if (this.container.length === 0) {
      id = 1
    } else {
      let lastIdx = this.container.length - 1
      id = this.container[lastIdx].id + 1
    }
    switch (type) {
      case "Chocolate":
        this.container.push(new Chocolate(id, name, price, ingredients))
        break
      case "Sweet":
        this.container.push(new Sweet(id, name, price, ingredients))
        break
      case "Strawberry":
        this.container.push(new Strawberry(id, name, price, ingredients))
        break
      default:
        break
    }
  }
  // delete
  eat(id) {
    let updated = this.container.filter(item => item.id !== Number(id))
    this.container = updated
  }
  // update 
  addSugar(id) {
    let updated = this.container.map(item => {
      if (item.id === Number(id)) {
        item.isSweet = !item.isSweet
      }
      return item
    })
    this.container = updated
  }
  //retrieves in table
  showTableCookies() {
    console.table(this.container)
  }
  // retrieves in log
  showCookies() {
    console.log('Our container contains: ')
    if (this.container.length > 0) {
      this.container.forEach(item => {
        let { id, name, price, ingredients, type, isSweet } = item
        console.log(`${id}. ${name} - Rp. ${Number(price).toLocaleString('id')}`)
        console.log('Ingredients: ')
        for (let i = 0; i < ingredients.length; i++) {
          console.log(`${i + 1}. ${ingredients[i]}`)
        }
        console.log(`Type - ${type}`)
        console.log(`isSweet  - ${isSweet ? 'Yes' : 'No'}`)
        console.log(`=====================================`)
      })
    } else {
      console.log('There is nothing here')
    }
  }
}

export default Kitchen