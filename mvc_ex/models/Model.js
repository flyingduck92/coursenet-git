const fs = require('fs')

class ModelWine {
  constructor(id, name, year, type, createdAt) {
    this.id = id
    this.name = name
    this.year = year
    this.type = type
    this.createdAt = createdAt
  }

  static getAll() {
    const data = fs.readFileSync('./wines.json', 'utf8')
    const wines = JSON.parse(data)
    return wines
  }

  static add(params) {
    let wines = this.getAll()

    let id = wines[wines.length - 1].id + 1
    let [name, year, type] = params[0].split('/')

    if (type === 'R' || type === 'Red') {
      type = 'Red'
    } else if (type === 'W' || type === 'White') {
      type = 'White'
    } else {
      type = 'Other'
    }

    let newItem = {
      id,
      name,
      "year": +year,
      type,
      createdAt: new Date().toJSON()
    }

    wines = [...wines, newItem]
    this.save(wines)
    console.log(`"${name}" has been added!`)
  }

  static delete(params) {
    let wines = this.getAll()
    let id = +params[0]
    let { name } = this.getOneItemById(id)

    wines = wines.filter(wine => wine.id !== id)
    this.save(wines)
    console.log(`"${name}" has been sold!`)
  }

  static rename(params) {
    let wines = this.getAll()
    let [id, item] = [+params[0], params[1]]

    let result = this.getOneItemById(id)

    if (result === undefined) {
      console.log(`Id ${id} is not found!`)
      return

    } else {
      let [name, year, type] = item.split('/')

      if (type === 'R' || type === 'Red') {
        type = 'Red'
      } else if (type === 'W' || type === 'White') {
        type = 'White'
      } else {
        type = 'Other'
      }

      let updated = wines.filter(wine => {
        if (wine.id === id) {
          wine.name = name
          wine.year = +year
          wine.type = type
        }
        return wine
      })

      wines = updated
      this.save(wines)
      console.log(`Wine number ${id} has been renamed !`)
    }

  }

  static lookUpId(params) {
    let id = +params[0]
    let result = this.getOneItemById(id)
    if (result === undefined) {
      console.log(`Id ${id} is not found!`)

    } else {
      let { name, year, type } = result
      let calculateYear = new Date().getFullYear() - year
      let drinkType = type === 'White' || type === 'Red' ? `${type} Wine` : `Other drink`

      console.log(`${name} is ${drinkType} with age of ${calculateYear} years.`)
    }
  }

  static sort(params) {
    /* 
      References: 
      https://mimo.org/glossary/javascript/sort
    */
    let wines = this.getAll()

    // ascending
    if (params[0].toLowerCase() === 'asc' || params[0].toLowerCase() === 'ascending') {
      wines.sort((a, b) => b.year - a.year)

      for (let i = 0; i < wines.length; i++) {
        let age = new Date().getFullYear() - wines[i].year
        console.log(`${i + 1}. ${wines[i].name} (${age} years)`)
      }
    }

    // descending
    else if (params[0].toLowerCase() === 'desc' || params[0].toLowerCase() === 'descending') {
      wines.sort((a, b) => a.year - b.year)

      for (let i = 0; i < wines.length; i++) {
        let age = new Date().getFullYear() - wines[i].year
        console.log(`${i + 1}. ${wines[i].name} (${age} years)`)
      }
    }
  }

  static getOneItemById(id) {
    let wines = this.getAll()
    let singleWine = wines.filter(wine => wine.id === id)[0]
    return singleWine
  }

  static save(updatedItems) {
    let updatedWines = JSON.stringify(updatedItems, null, 2)
    fs.writeFileSync('./wines.json', updatedWines)
  }

}

module.exports = ModelWine