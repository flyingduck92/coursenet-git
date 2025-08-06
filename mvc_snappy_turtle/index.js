const cmd = process.argv[2]
const params = process.argv.slice(3)

switch (cmd) {
  case 'help':
    console.log(`    node index.js show
    node index.js create <box_name>
    node index.js add <box_name> <...turtles>
    node index.js sell <box_name> <turtle_id>
    node index.js countPrice <box_name>
    node index.js detail <box_name>
    node index.js filter <species>`)
    break
  case 'create':
    console.log(params)
    break
  case 'add':
    console.log(params)
    break
  case 'sell':
    console.log(params)
    break
  case 'countPrice':
    console.log(params)
    break
  case 'detail':
    console.log(params)
    break
  case 'filter':
    console.log(params)
    break
}