class ViewWine {
  static message(msg) {
    console.log(msg)
  }

  static showHelpCommand() {
    let msg = `      node app.js <command> <params> 

      list of command: 
      help                  - shows all commands
      wines                 - shows all wines at the rack
      add <params>          - add a brand new wine to rack
      sell <id>             - remove a wine from rack
      rename <id> <params>  - update a wine from rack
      findById <id>         - look up wine by Id
      age <sortType>        - sorting wines by age 
      groupBy <type>        - group wines by type 

      params format (with doubles quotes): 
      params    - "<name>/<year>/<type>"
      name      - string e.g: Negroni/Whiskey
      year      - year e.g: 1970
      type      - type e.g: R/Red/W/White/Other
      id        - positive number e.g: 1/20/5656/33
      sortType  - "ascending" or "asc" / "descending" or "desc"
    `
    console.log(msg)
  }
}

module.exports = ViewWine