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
    console.log(`${name} has been baked.`)
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
        item.isSweet = true
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

  // 5a - showIngredients(id)
  /*
    "Chocolate Sweety" ingredients are:
    1. Chocolate
    2. Butter
  */
  showIngredients(id) {
    let result = this.container.filter(item => item.id === Number(id))
    let { name, ingredients } = result[0]
    console.log(`"${name}" ingredients are:`)
    for (let i = 0; i < ingredients.length; i++) {
      console.log(`${i + 1}. ${ingredients[i]}`)
    }
  }

  // 5b - addIngredient(id,ingredients)
  addIngredient(id, ingredients) {
    let updated = this.container.map(item => {
      if (item.id === Number(id)) {
        item.ingredients = [...item.ingredients, ...ingredients]
      }
      return item
    })
    this.container = updated
  }

  // 5c - categoriesCookiesByIngredient(ingredientName)
  categoriesCookiesByIngredient(ingredientName) {
    let results = []
    this.container.filter(item => {
      let { ingredients } = item
      for (let ingredient of ingredients) {
        if (ingredient.toLowerCase() === ingredientName.toLowerCase()) {
          results.push(item)
        }
      }
    })

    /* show result */
    console.log(`Cookies with ${ingredientName} Ingredients:`)
    for (let i = 0; i < results.length; i++) {
      console.log(`${i + 1}. ${results[i].name}`)
    }

  }

  // 5d - sortCookies(type) // asc or desc
  /*
  Our Cookies:
  1. [v] Chocolate Sweety, Rp 10000
  2. [ ] Plain butter, Rp. 5000
  */
  sortCookies(type) {
    let results
    switch (type) {
      case 'asc':
      case 'ASC':
        results = this.container.sort((a, b) => Number(a.price) - Number(b.price))
        break
      case 'desc':
      case 'DESC':
        results = this.container.sort((a, b) => Number(b.price) - Number(a.price))
        break
    }

    if (type === 'asc') {
      console.log(`ASC:`)
      for (let i = 0; i < results.length; i++) {
        console.log(`${i + 0}. ${results[i].name} - Rp. ${Number(results[i].price).toLocaleString('id')}`)
      }
    } else {
      console.log(`DESC:`)
      for (let i = 0; i < results.length; i++) {
        console.log(`${i + 0}. ${results[i].name} - Rp. ${Number(results[i].price).toLocaleString('id')}`)
      }
    }
  }

  // 5e - categoriesCookies()
  categoriesCookies() {
    let chocolates = [], sweets = [], strawberrys = []

    chocolates = this.container.filter(item => item.type.toLowerCase() === 'chocolate' && item)
    sweets = this.container.filter(item => item.type.toLowerCase() === 'sweet' && item)
    strawberrys = this.container.filter(item => item.type.toLowerCase() === 'strawberry' && item)

    console.log('Chocolate:')
    for (let i = 0; i < chocolates.length; i++) {
      console.log(`${i + 1}. ${chocolates[i].name}`)
    }
    console.log('\nSweet:')
    for (let i = 0; i < sweets.length; i++) {
      console.log(`${i + 1}. ${sweets[i].name}`)
    }
    console.log('\nStrawberry:')
    for (let i = 0; i < strawberrys.length; i++) {
      console.log(`${i + 1}. ${strawberrys[i].name}`)
    }
  }
}

export default Kitchen