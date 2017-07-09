import React, { Component } from 'react'
import './App.css'
import GroceryItemList from './components/GroceryItemList'

class App extends Component {
  render() {
    const initial = [{
      name: "Ice Cream"
    }, {
      name: "Waffles"
    }, {
      name: "Candy",
      purchased: true
    }, {
      name: "Snarks"
    }]

    return (
      <div className="App">
        <GroceryItemList items={initial} />
      </div>
    )
  }
}

export default App
