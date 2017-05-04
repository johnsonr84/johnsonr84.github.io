import React, { Component } from 'react'


class Screen1 extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1})
  }

  render() {
    return (
      <h1>Hello</h1>
      <div className="screen screen1">
        <img className="home-image" src={'./images/photo-white.png'} alt="rob" />
      </div>
    )
  }

}

module.exports = Screen1
