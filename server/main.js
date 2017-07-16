const express = require('express')
const path = require('path')
const app = new express()
const parser = require('body-parser')

require('./database.js')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})
  .use(express.static(path.join(__dirname, '../build')))
  .listen(7777)

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))

require('./routes/items.js')(app)
