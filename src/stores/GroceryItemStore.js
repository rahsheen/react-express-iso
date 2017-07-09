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
        case "delete":
          deleteGroceryItem(event.payload)
          break
        case "buy":
          setGroceryItemBought(event.payload, true)
          break
        case "unbuy":
          setGroceryItemBought(event.payload, false)
          break
        default:

      }
    }
  })

  function setGroceryItemBought(item, isBought) {
    let _item = items.filter(a => a.name === item.name)[0]

    item.purchased = isBought || false
    triggerListeners()
  }

  function addGroceryItem(item) {
    items.push(item)
    triggerListeners()
  }

  function deleteGroceryItem(item) {
    const index = items.findIndex(_item => _item.name === item.name)
    items.splice(index,1)
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