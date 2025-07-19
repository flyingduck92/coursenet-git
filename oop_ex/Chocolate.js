import Cookie from './Cookie.js'

class Chocolate extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Chocolate")
    this.isSweet = false
  }
}

export default Chocolate