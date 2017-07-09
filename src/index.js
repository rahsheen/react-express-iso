import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import GroceryItemList from './components/GroceryItemList'
import groceryItemStore from './stores/GroceryItemStore'

let initial = groceryItemStore.getItems()

function render() {
  ReactDOM.render(<GroceryItemList items={initial} />, document.getElementById('root'))
}

groceryItemStore.onChange(items => {
  initial = items
  render()
})

render()

registerServiceWorker()
