const { Apple, Orange, Other: OtherF } = require('./Fruits/Fruit')
const { Carrot, Potato, Other: OtherV } = require('./Vegetables/Vegetable')

class Warehouse {
  constructor(carts, totalPrice) {
    this.carts = carts || []
    this.totalPrice = totalPrice || 0
  }

  harvest(name, type, price) {
    let id, amount, harvestedAt

    if (this.carts.length === 0) {
      id = 1
    } else {
      let lastIdx = this.carts.length - 1
      id = this.carts[lastIdx].id + 1
    }

    // Generate random number between 1 - 100
    amount = Math.floor(Math.random() * 100) + 1
    harvestedAt = new Date()

    // always return positive number for pricing
    price = Math.abs(price)

    switch (type) {
      case 'Apple':
        this.carts.push(new Apple(id, name, price, amount, harvestedAt))
        break
      case 'Orange':
        this.carts.push(new Orange(id, name, price, amount, harvestedAt))
        break
      case 'OtherF':
        this.carts.push(new OtherF(id, name, price, amount, harvestedAt))
        break
      case 'Carrot':
        this.carts.push(new Carrot(id, name, price, amount, harvestedAt))
        break
      case 'Potato':
        this.carts.push(new Potato(id, name, price, amount, harvestedAt))
        break
      case 'OtherV':
        this.carts.push(new OtherV(id, name, price, amount, harvestedAt))
        break
      default:
        break
    }
    console.log(`${name} has been harvested.`)
  }

  showCarts() {
    let totalItems = this.carts.length

    if (totalItems < 1) {
      console.log(`There is nothing in the cart.`)
    } else if (totalItems === 1) {
      console.log(`There is ${totalItems} item in cart:`)
    } else {
      console.log(`There are ${totalItems} items in cart:`)
    }

    for (let i = 0; i < totalItems; i++) {
      let amount = this.carts[i].amount * this.carts[i].price
      let priceFormat = this.currencyFormat(amount)

      console.log(`${i + 1}. ${this.carts[i].name} - ${priceFormat}`)
    }
  }

  ship(id) {

    // check item by id at cart
    let result = ''
    let myCart = this.carts

    let i = 0
    while (i < myCart.length) {
      if (myCart[i].id === id) {
        this.totalPrice += (myCart[i].amount * myCart[i].price)
        result = `"${myCart[i].name}" has been shipped`

        // remove from cart
        const updatedCart = myCart.filter(item => item.id !== id)
        this.carts = updatedCart
        break
      }
      i++
    }

    // id notfound
    if (result === '') {
      result = `Id ${id} is not in the cart.`
    }

    console.log(result)
    console.log(`Total Price: ${this.currencyFormat(this.totalPrice)}`)
  }

  // utils => format currency
  currencyFormat(amount) {
    const formatter = new Intl.NumberFormat('id', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    })

    return formatter.format(amount)
  }
}

module.exports = Warehouse