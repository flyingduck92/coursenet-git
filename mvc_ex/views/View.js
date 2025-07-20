class ViewWine {
  static showAll(data) {
    for (let item of data) {
      console.log(`${item.id}. ${item.name}`)
    }
  }

  static showHelpCommand() {
    console.log(`
      node app.js <command> <params> 

      list of command: 
      wines                 - shows all wines at the rack
      add <params>          - add a brand new wine to rack
      sell <id>             - remove a wine from rack
      rename <id> <params>  - update a wine from rack
      findById <id>         - look up wine by Id

      params format (with doubles quotes): 
      params  - "<name>/<year>/<type>"
      name - string e.g: Negroni/Whiskey
      year - year e.g: 1970
      type - type e.g: R/Red/W/White/Other
    `)
  }
}

module.exports = ViewWine