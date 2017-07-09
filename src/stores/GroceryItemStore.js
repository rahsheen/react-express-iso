import dispatcher from '../dispatcher'

function GroceryItemStore() {

  let items = []
  let listeners = []

  dispatcher.register(event => {
    let split = event.type.split(':')
    if (split[0] === 'grocery-item') {
      switch (split[1]) {
        case "add":
          addGroceryItem(event.payload)
          break
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
    changeListeners.forEach(listener => listener(groceryItems))
  }

  return {
    getItems: getItems,
    onChange: onChange
  }
}

export default new GroceryItemStore()