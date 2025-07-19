class Vehicle {
  constructor(id, name, type, price, isSold) {
    this.id = id
    this.name = name
    this.type = type
    this.price = price
    this.isSold = isSold
  }
  startEngine() {
    console.log("Start Engine")
  }
  stopEngine() {
    console.log("Stop Engine")
  }
}

let myVehicle = new Vehicle(100, "Civic", "Sedan", 1000000, true)
console.log(myVehicle)
console.log(typeof myVehicle)
console.log(typeof Vehicle)