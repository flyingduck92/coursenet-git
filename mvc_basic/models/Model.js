const fs = require('fs')

class Coffee {
  constructor(id, name, price, beans, is_available) {
    this.id = id
    this.name = name
    this.price = price
    this.beans = beans
    this.is_available = is_available
  }

  // To Pick all data from data.json
  static getCoffees() {
    const data = fs.readFileSync('./data.json', 'utf8')
    const coffees = JSON.parse(data)
    return coffees
  }

  static add(params) {
    let coffees = this.getCoffees()
    let id = coffees[coffees.length - 1].id + 1
    let [name, price, beans] = params
    let is_available = true

    coffees = [...coffees, new Coffee(id, name, +price, beans, is_available)]
    this.save(coffees)
  }

  static update(params) {
    let [id, name, price, beans, is_available] = params
    let coffees = this.getCoffees()
    let updated = coffees.map(coffee => {
      if (coffee.id === Number(id)) {
        coffee.name = name
        coffee.price = +price
        coffee.beans = beans
        coffee.is_available = is_available
      }
      return coffee
    })
    coffees = updated
    this.save(coffees)
  }

  static delete(params) {
    let [id] = params
    let coffees = this.getCoffees()
    let updated = coffees.filter(coffee => +coffee.id !== +id)
    coffees = updated
    this.save(coffees)
  }

  static save(coffees) {
    const coffeesStr = JSON.stringify(coffees, null, 2)
    fs.writeFileSync('./data.json', coffeesStr)
  }
}

module.exports = Coffee