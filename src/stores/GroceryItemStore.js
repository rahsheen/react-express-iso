import dispatcher from '../dispatcher'
import helper from '../helpers/RestHelper'

function GroceryItemStore() {
  let items = []

  helper.get("api/items")
    .then(resp => resp.json())
    .then(data => {
      items = data
      triggerListeners()
    })
    .catch(error => {
      console.log("Error ", error)
    })

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

    _item.purchased = isBought || false
    triggerListeners()
  }

  function addGroceryItem(item) {
    items.push(item)
    triggerListeners()

    helper.post("api/items", item)
  }

  function deleteGroceryItem(item) {
    const index = items.findIndex(_item => _item.name === item.name)
    items.splice(index, 1)
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