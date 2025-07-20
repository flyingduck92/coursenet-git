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
}

module.exports = Coffee