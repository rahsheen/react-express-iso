module.exports = app => {

  const GroceryItem = require('./../models/GroceryItem.js')

  app.route('/api/items')
    .get((req, res) =>
      GroceryItem.find((error, doc) =>
        res.send(doc)
      ))
    .post((req, res) => {
      let item = req.body
      const groceryItem = new GroceryItem(item)
      groceryItem.save((error, data) =>
        res.status(300).send())
    })

  app.route('api/items/:id')
    .delete((req, res) =>
      GroceryItem.find({
        _id: req.params.id
      }).remove())
    .patch((req, res) =>
      GroceryItem.findOne({
        _id: req.body._id
      }, (error, doc) => {
        for (let key in req.body) {
          doc[key] = req.body[key]
        }
        doc.save()
        res.status(200).send();
      }))
}