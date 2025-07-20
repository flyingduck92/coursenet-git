const Coffee = require('../models/Model')
const View = require('../views/View')

class Controller {
  static showCoffees() {
    let coffees = Coffee.getCoffees()
    View.show(coffees)
  }
  static addCoffee(params) {
    Coffee.add(params)
  }
  static updateCoffee(params) {
    Coffee.update(params)
  }
  static deleteCoffee(params) {
    Coffee.delete(params)
  }
  static message(msg) {
    console.log(msg)
  }
}

module.exports = Controller