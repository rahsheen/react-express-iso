import React, { Component } from 'react'
import GroceryItem from '../components/GroceryItem'

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
      </div>
    )
  }
}

export default GroceryItemList