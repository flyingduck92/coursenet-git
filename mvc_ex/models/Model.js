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

  static getOneById(id) {
    let wines = this.getAll()
    let singleWine = wines.filter(wine => wine.id === id)[0]
    return singleWine
  }

  static add(params) {
    let wines = this.getAll()
    let newEntry = params[0]
    let id

    wines.length > 0 ? (id = wines[wines.length - 1].id + 1) : (id = 1)

    let { name, year, type } = this.formatItem(newEntry)
    let createdAt = new Date().toJSON()

    let newItem = { id, name, year, type, createdAt }

    wines = [...wines, newItem]
    this.save(wines)
    return `"${name}" has been added!`
  }

  static delete(params) {
    let wines = this.getAll()
    let id = +params[0]
    let name

    let result = this.getOneById(id)

    if (result === undefined) {
      return `Id ${id} is not found!`

    } else {
      wines.filter(wine => {
        if (wine.id === id) {
          name = wine.name
        }
      })

      wines = wines.filter(wine => wine.id !== id)
      this.save(wines)
      return `"${name}" has been sold!`
    }
  }

  static rename(params) {
    let wines = this.getAll()
    let [id, item] = [+params[0], params[1]]
    id = +id

    let result = this.getOneById(id)

    if (result === undefined) {
      return `Id ${id} is not found!`

    } else {
      let { name, year, type } = this.formatItem(item)

      let updated = wines.map(wine => {
        if (wine.id === id) {
          wine.name = name
          wine.year = year
          wine.type = type
        }
        return wine
      })

      wines = updated
      this.save(wines)
      return `Wine number ${id} has been renamed!`
    }

  }

  static findById(params) {
    let id = +params[0]
    let result = this.getOneById(id)

    if (result === undefined) {
      return `Id ${id} is not found!`

    } else {
      let { name, year, type } = result
      let calculateYear = new Date().getFullYear() - year
      let drinkType = type === 'White' || type === 'Red' ? `${type} Wine` : `Other drink`

      return `${name} is ${drinkType} with age of ${calculateYear} years.`
    }
  }

  static sort(params) {
    /* 
      References: 
      https://mimo.org/glossary/javascript/sort
    */
    let wines = this.getAll()
    let message = ''

    switch (params[0].toLowerCase()) {
      case 'asc':
      case 'ascending':
        wines.sort((a, b) => b.year - a.year)
        message = this.sortFormat(wines)
        break
      case 'desc':
      case 'descending':
        wines.sort((a, b) => a.year - b.year)
        message = this.sortFormat(wines)
        break
    }
    return message
  }

  static formatItem(item) {
    let [name, year, type] = item.split('/')
    year = Number(year)

    switch (type) {
      case 'R':
      case 'r':
      case 'Red':
      case 'red':
      case 'RED':
        type = 'Red'
        break
      case 'W':
      case 'w':
      case 'White':
      case 'white':
      case 'WHITE':
        type = 'White'
        break
      default:
        type = 'Other'
        break
    }

    return { name, year, type }
  }

  static sortFormat(wines) {
    let message = ''

    for (let i = 0; i < wines.length; i++) {
      let age = new Date().getFullYear() - wines[i].year
      if (message === '') {
        message += `${i + 1}. ${wines[i].name} (${age} years)`
      } else {
        message += `\n${i + 1}. ${wines[i].name} (${age} years)`
      }
    }

    return message
  }

  static save(updatedItems) {
    let updatedWines = JSON.stringify(updatedItems, null, 2)
    fs.writeFileSync('./wines.json', updatedWines)
  }

}

module.exports = ModelWine