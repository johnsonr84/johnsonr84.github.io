import React, { Component } from 'react'

class Screen5 extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateScreen", {screenIndex: 5})
  }

  render() {
    return (
      <div className="screen screen5">
        <h4>Heyo!</h4>
        <p>
        I am currently seeking a career as a front-end engineer in the Greater Salt Lake Area. If you would like to get in touch, please shoot me an email at
        <a title="Email Rob Johnson" href="mailto:robertcjohnson1984@gmail.com">robertcjohnson1984@gmail.com</a>or contact me on social media.
        </p>
        <p>Thank you, Rob</p>
      </div>
    )
  }

}

module.exports = Screen5
