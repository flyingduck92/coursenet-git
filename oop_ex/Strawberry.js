import Cookie from './Cookie.js'

class Strawberry extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Strawberry")
    this.isSweet = false
  }
}

export default Strawberry