const ModelWine = require('../models/Model')
const ViewWine = require('../views/View')

class ControllerWine {
  //0
  static showHelp() {
    ViewWine.showHelpCommand()
  }
  // 1
  static showAllWines() {
    const wines = ModelWine.getAll()
    ViewWine.showAll(wines)
  }

  // 2
  static addWine(params) {
    ModelWine.add(params)
  }

  // 3
  static sellWine(params) {
    ModelWine.delete(params)
  }

  // 4
  static renameWine(params) {
    ModelWine.rename(params)
  }

  // 5
  static findById(params) {
    ModelWine.lookUpId(params)
  }

  // 6 Sorting ASC/DESC
  static sortByAge(params) {
    ModelWine.sort(params)
  }

  // 7 GroupBy
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy */

}

module.exports = ControllerWine