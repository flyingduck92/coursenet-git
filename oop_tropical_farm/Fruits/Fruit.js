class Fruit {
  constructor(id, name, type, price, amount, harvestedAt) {
    this.id = id
    this.name = name
    this.type = type
    this.price = price
    this.amount = amount
    this.harvestedAt = harvestedAt
  }
}

class Apple extends Fruit {
  constructor(id, name, price, amount, harvestedAt) {
    super(id, name, "Apple", price, amount, harvestedAt)
  }
}

class Orange extends Fruit {
  constructor(id, name, price, amount, harvestedAt) {
    super(id, name, "Orange", price, amount, harvestedAt)
  }
}

class Other extends Fruit {
  constructor(id, name, price, amount, harvestedAt) {
    super(id, name, "Other", price, amount, harvestedAt)
  }
}

module.exports = { Apple, Orange, Other }