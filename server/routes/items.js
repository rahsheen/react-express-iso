module.exports = app => {
  let items = [{
    name: "Ice Cream"
  }, {
    name: "Waffles"
  }, {
    name: "Candy",
    purchased: true
  }, {
    name: "Snarks"
  }]

  app.route('/api/items')
    .get((req, res) => res.send(items))
    .post((req, res) => {
      items.push(req.body)
      res.send(items)
    })
}