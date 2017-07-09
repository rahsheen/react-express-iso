var express =  require('express')

var app = new express()

app.get('/', (req, res) => {
  res.render('./../index.ejs', {});
})
.use(express.static(__dirname + '/../public'))
.listen(7777);