const mongoose = require('mongoose')

// Use native promises
mongoose.Promise = global.Promise;

var promise = mongoose.connect('mongodb://localhost/grocery', {
  useMongoClient: true,
  /* other options */
});

promise.then(db => {
  console.log("mongodb connected")
})