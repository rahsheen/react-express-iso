import React, { Component } from 'react'
import './App.css'
import GroceryItemList from './components/GroceryItemList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <GroceryItemList items={initial} />
      </div>
    )
  }
}

export default App
