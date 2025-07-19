class Vehicle {
  constructor(id, name, type, price, isSold) {
    this.id = id
    this.name = name
    this.type = type
    this.price = price
    this.isSold = isSold
  }
}

class Sedan extends Vehicle {
  constructor(id, name, price, isSold) {
    super(id, name, "Sedan", price, isSold)
  }
}

class Truck extends Vehicle {
  constructor(id, name, price, isSold) {
    super(id, name, "Truck", price, isSold)
  }
}

class SUV extends Vehicle {
  constructor(id, name, price, isSold) {
    super(id, name, "SUV", price, isSold)
  }
}

let sedan = new Sedan(200, "Toyota", 10000000, true)
console.log(sedan)

let truck = new Truck(200, "Hino", 35000000, false)
console.log(truck)

let suv = new SUV(200, "Land Rover", 50000000, false)
console.log(suv)