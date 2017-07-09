import React, { Component } from 'react'
import GroceryItem from '../components/GroceryItem'
import GroceryListAddItem from '../components/GroceryListAddItem'

class GroceryItemList extends Component {
  render() {
    return (
      <div>
        <h1>Grocery Listify</h1>
        <div>
          {this.props.items.map(
            (item, index) => <GroceryItem
              item={item}
              key={"item" + index} />
          )}
        </div>
        <GroceryListAddItem />
      </div>
    )
  }
}

export default GroceryItemList