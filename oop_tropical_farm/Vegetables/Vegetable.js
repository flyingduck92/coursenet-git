class Vegetable {
  constructor(id, name, type, price, amount, harvestedAt) {
    this.id = id
    this.name = name
    this.type = type
    this.price = price
    this.amount = amount
    this.harvestedAt = harvestedAt
  }
}

class Potato extends Vegetable {
  constructor(id, name, price, amount, harvestedAt) {
    super(id, name, "Potato", price, amount, harvestedAt)
  }
}

class Carrot extends Vegetable {
  constructor(id, name, price, amount, harvestedAt) {
    super(id, name, "Carrot", price, amount, harvestedAt)
  }
}

class Other extends Vegetable {
  constructor(id, name, price, amount, harvestedAt) {
    super(id, name, "Other", price, amount, harvestedAt)
  }
}

module.exports = { Potato, Carrot, Other }