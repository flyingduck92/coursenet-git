class Fruit {
  constructor(id, name, price, stock, category) {
    this.id = id
    this.name = name
    this.price = price
    this.stock = stock
    this.category = category
  }
}

class Apple extends Fruit {
  constructor(id, name, price, stock) {
    super(id, name, price, stock, "Apple")
  }
}

class Orange extends Fruit {
  constructor(id, name, price, stock) {
    super(id, name, price, stock, "Orange")
  }
}

class Banana extends Fruit {
  constructor(id, name, price, stock) {
    super(id, name, price, stock, "Banana")
  }
}

/* FACTORY CLASS */
class Supermarket {
  constructor(shelves) {
    this.shelves = shelves || []
  }

  showItems() {
    console.log("Supermarket Shelves:")
    if (this.shelves.length > 0) {
      this.shelves.forEach(shelf => {
        let { id, name, price, stock, category } = shelf
        console.log(`${id}. ${name} - Rp. ${Number(price).toLocaleString('id')}`)
        console.log(`Stock: ${stock} pcs. Category: ${category}`)
        console.log(`================================`)
      })
    } else {
      console.log("There is no item")
    }
  }

  showInTable() {
    console.table(this.shelves)
  }

  addItem(name, price, stock, category) {
    let id
    if (this.shelves.length == 0) {
      id = 1
    } else {
      let lastIdx = this.shelves.length - 1
      id = this.shelves[lastIdx].id + 1
    }
    switch (category) {
      case "Apple":
        this.shelves.push(new Apple(id, name, price, stock))
        break
      case "Orange":
        this.shelves.push(new Orange(id, name, price, stock))
        break
      case "Banana":
        this.shelves.push(new Banana(id, name, price, stock))
        break
    }
  }
}

const supermarket = new Supermarket()
supermarket.addItem("Apel Malang", 28000, 10, "Apple")
supermarket.addItem("Jeruk Medan", 35000, 10, "Orange")
supermarket.addItem("Pisang Cavendish", 28000, 6, "Banana")
supermarket.addItem("Jeruk Bali Pamelo", 40000, 8, "Orange")
supermarket.addItem("Pisang Tanduk", 40000, 8, "Banana")
// supermarket.showItems()
supermarket.showInTable()