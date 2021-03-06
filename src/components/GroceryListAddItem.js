import React, { Component } from 'react'
import action from '../actions/GroceryItemActionCreator'
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';

class GroceryListAddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {input: ""}

    this.handleInputName = this.handleInputName.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleInputName(e) {
    this.setState({input: e.target.value})
  }

  addItem(e) {
    e.preventDefault()
    // console.log("Adding item!", this.state.input)
    action.add({
      name: this.state.input
    })

    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div className='grocery-addItem'>
        <form onSubmit={this.addItem}>
          <input type='text' value={this.state.input} onChange={this.handleInputName} />
          <button> Add Item </button>
        </form>
      </div>
    )
  }
}

export default GroceryListAddItem