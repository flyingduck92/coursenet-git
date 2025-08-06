class Turtle {
  constructor(id, name, species, price, patterns) {
    this.id = id
    this.name = name
    this.species = species
    this.price = price
    this.patterns = patterns
  }
}

class SnappingTurtle extends Turtle {
  constructor(id, name, species = "Snapping Turtle", price, pattern, size, weight) {
    super(id, name, species, price, pattern)
    this.size = size
    this.weight = weight
  }
}

class Tortoise extends Turtle {
  constructor(id, name, species = "Tortoise", price, pattern, size, weight) {
    super(id, name, species, price, pattern)
    this.size = size
    this.weight = weight
  }
}

class Terrapins extends Turtle {
  constructor(id, name, species = "Terrapins", price, pattern, size, weight) {
    super(id, name, species, price, pattern)
    this.size = size
    this.weight = weight
  }
}

module.exports = { SnappingTurtle, Tortoise, Terrapins }