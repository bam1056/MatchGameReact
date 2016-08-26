import React, { Component } from 'react'
import './App.css'
import Card from './Card'
import cards from './cards.json'

class Board extends Component {
  constructor () {
    super()
    this.state = {
      flippedCards: [],
      matched: false
    }
  }
  _acceptCard = (card) => {
    this.state.flippedCards.push(card)
    this.setState({flippedCards: this.state.flippedCards })
  }
  _onPlay = () => {
    let { flippedCards } = this.state.flippedCards
    if (flippedCards.length === 2) {
      if (flippedCards[0].name === flippedCards[1].name) {

      }
    }
  }
  render () {
    let card = cards.card
    let cardArray = card.map((newCard, i) => {
      for(let j = 0; j < 2 ; j++) {
      return <Card card={newCard} key={i} index={i} matched={this.state.matched} play={this._onPlay} passCard={this._acceptCard}/>
    }
    })

    return <div className='cards'>
      {cardArray}
    </div>
  }
}

export default Board

// background: 'http://orig09.deviantart.net/57d9/f/2012/043/0/4/the_lord_of_the_rings_golden_movie_logo_by_freeco-d4phvpy.jpg',
