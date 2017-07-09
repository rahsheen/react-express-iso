import dispatcher from '../dispatcher'

function GroceryItemStore() {
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

  let listeners = []

  dispatcher.register(event => {
    let split = event.type.split(':')
    if (split[0] === 'grocery-item') {
      switch (split[1]) {
        case "add":
          addGroceryItem(event.payload)
          break
        default:

      }
    }
  })


  function addGroceryItem(item) {
    items.push(item)
    triggerListeners()
  }

  function getItems() {
    return items
  }

  function onChange(listener) {
    listeners.push(listener)
  }

  function triggerListeners() {
    listeners.forEach(listener => listener(items))
  }

  return {
    getItems: getItems,
    onChange: onChange
  }
}

export default new GroceryItemStore()