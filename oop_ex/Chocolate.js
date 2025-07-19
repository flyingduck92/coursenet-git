const Cookie = require("./Cookie")

class Chocolate extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Chocolate")
    this.isSweet = false
  }
}

module.exports = Chocolate