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

let myVehicle1 = new Vehicle(100, "Civic", "Sedan", 1000000, true)
let myVehicle2 = new Vehicle(200, "Hino", "Truck", 2500000, true)
let myVehicle3 = new Vehicle(300, "Land Rover", "SUV", 5000000, true)
console.log(myVehicle1)
console.log(myVehicle2)
console.log(myVehicle3)
// console.log(typeof myVehicle1)
// console.log(typeof Vehicle)