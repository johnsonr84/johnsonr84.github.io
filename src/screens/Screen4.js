import React, { Component } from 'react'

class Screen4 extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateScreen", {screenIndex: 4})
  }

  render() {
    return (
      <div className="screen screen4">
        <h1>BLOG</h1>
        <h2>Articles, Videos and Tutorials</h2>
        <p>I love to write, share stories and spread insiration to others!</p>
      </div>
    )
  }

}

module.exports = Screen4
