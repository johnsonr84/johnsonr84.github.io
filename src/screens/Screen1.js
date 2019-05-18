import React, { Component } from 'react'


class Screen1 extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1})
  }

  render() {
    return (
      <div className="screen screen1">
      <h1>Hello</h1>
        <img className="home-image" src={'./images/rob.jpg'} alt="rob" />
      </div>
    )
  }

}

module.exports = Screen1
