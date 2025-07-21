const ModelWine = require('../models/Model')
const ViewWine = require('../views/View')

class ControllerWine {
  //0 showhelp
  static showHelp() {
    ViewWine.showHelpCommand()
  }
  // 1 list all wines
  static showAllWines() {
    const wines = ModelWine.getAll()
    ViewWine.showAll(wines)
  }

  // 2 add a new wine
  static addWine(params) {
    const result = ModelWine.add(params)
    ViewWine.message(result)
  }

  // 3 sell a wine (delete single wine from rack)
  static sellWine(params) {
    const result = ModelWine.delete(params)
    ViewWine.message(result)
  }

  // 4 rename a wine
  static renameWine(params) {
    const result = ModelWine.rename(params)
    ViewWine.message(result)
  }

  // 5 find a wine by Id
  static findById(params) {
    const result = ModelWine.findById(params)
    ViewWine.message(result)
  }

  // 6 Sorting ASC/DESC
  static sortByAge(params) {
    const result = ModelWine.sort(params)
    ViewWine.message(result)
  }

  // 7 GroupBy
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy */

}

module.exports = ControllerWine