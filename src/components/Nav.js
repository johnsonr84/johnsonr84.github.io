import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="app-nav">
        <div
          className={this.props.screenIndex === 1 ? "nav-item screen1 active-nav" : "nav-item screen1"}>
          <Link to="/screen1">HOME</Link>
        </div>
        <div
          className={this.props.screenIndex === 2 ? "nav-item screen2 active-nav" : "nav-item screen2"}>
          <Link to="/screen2">ABOUT</Link>
        </div>
        <div
          className={this.props.screenIndex === 3 ? "nav-item screen3 active-nav" : "nav-item screen3"}>
          <Link to="/screen3">PORTFOLIO</Link>
        </div>
        <div
          className={this.props.screenIndex === 4 ? "nav-item screen4 active-nav accordion" : "nav-item screen4"}>
          <Link to="/screen4">BLOG</Link>
          <div className="panel">
            <p>January</p>
            <p>February</p>
            <p>March</p>

          </div>
        </div>
        <div
          className={this.props.screenIndex === 5 ? "nav-item screen4 active-nav" : "nav-item screen5"}>
          <Link to="/screen5">CONTACT</Link>
        </div>
      </div>
    )
  }

}

module.exports = Nav
