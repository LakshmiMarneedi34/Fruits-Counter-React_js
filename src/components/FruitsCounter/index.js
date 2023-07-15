// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onIncrementMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">
            Bob ate <span className="span">{mangoCount}</span> mangoes
            <span className="span"> {bananaCount}</span> bananas
          </h1>
          <div className="img-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="img-container">
            <button
              className="button"
              onClick={this.onIncrementMango}
              type="button"
            >
              Eat Mango
            </button>
            <button
              className="button"
              onClick={this.onIncrementBanana}
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
