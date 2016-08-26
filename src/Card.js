import React, { Component } from 'react'

class Card extends Component {
  constructor () {
    super()
    this.state = {
      faceUp: false
    }
  }
  _turnCard = () => {
    (this.state.faceUp) ? this.setState({faceUp:false}) : this.setState({faceUp:true})
    this.props.passCard(this.props.card)
    this.props.play()
  }
  render () {
    let card
    switch(this.state.faceUp) {
      case true: card = <img onClick={this._turnCard} src={this.props.card.cardImageURL} alt='card' height='300' width='300' />
        break
      case false: card = <img onClick={this._turnCard} src={this.props.card.backgroundURL} alt='card' height='300' width='300' />
        break
      default: card = <img onClick={this._turnCard} src={this.props.card.backgroundURL} alt='card' height='300' width='300' />
    }
    return <div className="card">
      {card}
    </div>
  }
}
export default Card
