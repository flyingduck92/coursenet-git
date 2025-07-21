const command = process.argv[2]
const params = process.argv.slice(3)

const ControllerWine = require('./controllers/Controller')

switch (command) {
  case "help":
    ControllerWine.showHelp()
    break
  case "wines":
    /*
      Command - node index.js wines
      Output:
        Welcome to Wine Management!!
        1. Moscato 2010
        2. White Bourdon
    */
    console.log(`Welcome to Wine Management!!`)
    ControllerWine.showAllWines()
    break
  case "add":
    /*
      Command - node index.js add "Red Wines/2015/R"
      Output - "Red Wines" has been added!
    */
    ControllerWine.addWine(params)
    break
  case "sell":
    /* 
      Command - node index.js sell 3
      Output - "Red Caliber" has been sold!
     */
    ControllerWine.sellWine(params)
    break
  case "rename":
    /*
      Command - node index.js rename 3 "White Caliber/2007/W"
      Output:
        Found - Wine number 3 has been renamed !
        NotFound - Id 3 is not found!!
     */
    ControllerWine.renameWine(params)
    break
  case "findById":
    /*
      Command - node index.js findById 1
      Output:
        Found -  Moscato 2010 is Red Wine with age of 10 years.
        NotFound - Id 3 is not found!!
     */
    ControllerWine.findById(params)
    break
  case "age":
    /*
      Command - node index.js age ascending
      Output:
        Wines Sorted (Asc/Desc) by Age:
        1. Moscato 2010
        2. White Bourdon
     */
    ControllerWine.sortByAge(params)
    break
  case "groupBy":
    /*
    Command - node index.js groupBy Red
    Output:
      Red:
      1. Moscato 2010
      2. White Bourdon
    */
    ControllerWine.groupBy(params)
    break
}
