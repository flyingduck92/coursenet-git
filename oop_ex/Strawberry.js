const Cookie = require("./Cookie")

class Strawberry extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Strawberry")
    this.isSweet = false
  }
}

module.exports = Strawberry