import React, { Component } from 'react'

class Screen5 extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateScreen", {screenIndex: 5})
  }

  render() {
    return (
      <div className="screen screen5">
        <h1>CONTACT</h1>
        <h3>Heyo!</h3>
        <p>I am currently seeking a career as a Junior Dev in the Greater Salt Lake Area. If you would like to get in touch, please shoot me an email at robertcjohnson1984@gmail.com or contact me on social media.</p>
        <p>Thank you, Rob</p>
      </div>
    )
  }

}

module.exports = Screen5
