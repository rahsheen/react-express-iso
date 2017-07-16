const mongoose = require('mongoose')
const GroceryItem = require('./models/GroceryItem.js')

// Use native promises
mongoose.Promise = global.Promise;

var promise = mongoose.connect('mongodb://localhost/grocery', {
  useMongoClient: true,
  /* other options */
});

promise.then(db => {
  console.log("mongodb connected")

  mongoose.connection.db.dropDatabase();

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

  items.forEach(item => {
    new GroceryItem(item).save()
  })
})