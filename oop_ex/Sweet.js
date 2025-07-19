import Cookie from './Cookie.js'

class Sweet extends Cookie {
  constructor(id, name, price, ingredients) {
    super(id, name, price, ingredients, "Sweet")
    this.isSweet = false
  }
}

export default Sweet