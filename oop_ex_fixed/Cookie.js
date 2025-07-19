class Cookie {
  constructor(id, name, price, ingredients, type) {
    this.id = id
    this.name = name
    this.price = price
    this.ingredients = ingredients
    this.type = type
  }
}

class Chocolate extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Chocolate")
    this.isSweet = false
  }
}

class Sweet extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Sweet")
    this.isSweet = false
  }
}

class Strawberry extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Strawberry")
    this.isSweet = false
  }
}

module.exports = { Chocolate, Sweet, Strawberry }