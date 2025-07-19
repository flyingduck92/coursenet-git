const Cookie = require("./Cookie")

class Sweet extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Sweet")
    this.isSweet = false
  }
}

module.exports = Sweet