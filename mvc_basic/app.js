const command = process.argv[2]
const params = process.argv.slice(3)

const Controller = require('./controllers/Controller')

switch (command) {
  case 'show':
    Controller.showCoffees()
    break
  case 'add':
    Controller.addCoffee()
    break
  case 'update':
    Controller.updateCoffee()
    break
  case 'dalete':
    Controller.deleteCoffee()
    break
  default:
    Controller.message('Command not found')
    break
}