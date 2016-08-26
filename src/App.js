import React, { Component } from 'react'
import Board from './Board'
import './App.css'
import cards from './cards.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'game'
    }
  }

  render () {
    console.log(cards)
    return (
      <div className='App'>
      <h1>MEMORY GAME!</h1>
        <Board />
      </div>
    )
  }
}

export default App
