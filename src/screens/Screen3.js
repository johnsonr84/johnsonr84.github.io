import React, { Component } from 'react'

class Screen3 extends Component {

  componentWillMount() {
    this.props.eventEmitter.emit("navigateScreen", {screenIndex: 3})
  }

  render() {
    return (
      <div className="screen screen3">
        <h1>PORTFOLIO</h1>
        <p>Checkout some of the most recent projects that I have created.</p>
      </div>
    )
  }

}

module.exports = Screen3
