import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import GroceryItemList from './components/GroceryItemList'

class App extends Component {
  render() {
    const initial = [{
      name: "Ice Cream"
    },{
      name: "Waffles"
    },{
      name: "Candy",
      purchased: true
    },{
      name:"Snarks"
    }]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <GroceryItemList items={initial} />
        </p>
      </div>
    )
  }
}

export default App
