const express =  require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})
.use(express.static(path.join(__dirname, '../build')))
.listen(7777)