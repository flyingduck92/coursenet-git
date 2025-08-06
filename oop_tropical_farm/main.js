const Warehouse = require('./Warehouse')

let warehouse = new Warehouse()

warehouse.harvest("Apel Malang", "Apple", 3000)
warehouse.harvest("Jeruk Medan", "Orange", 2500)
warehouse.harvest("Kentang Kuning", "Potato", 2000)

warehouse.showCarts()

warehouse.ship(2)
warehouse.ship(5) // not found
warehouse.ship(1)
warehouse.ship(8) // not found
warehouse.ship(3)