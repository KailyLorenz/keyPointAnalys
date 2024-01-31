// 4: START SERVER
const dotenv = require('dotenv')

process.on('uncaughtException', err => {
  console.log('uncaughtException')
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config({path: `${__dirname}/config.env`})
const app = require('./app')

const port = process.env.PORT || 3000;
const server = app.listen(port,  () =>{
  console.log(`App running on port ${port}`)
})


