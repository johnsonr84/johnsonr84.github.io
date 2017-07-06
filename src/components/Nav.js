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
        </div>
        <div
          className={this.props.screenIndex === 5 ? "nav-item screen4 active-nav" : "nav-item screen5"}>
          <Link to="/screen5">CONTACT</Link>
        </div>
        <div className="social-media">
          <Link className="resume" href="https://www.visualcv.com/robert-johnson">RESUME</Link>
          <Link className="linkedIn" href="https://www.linkedin.com/in/robertjohnson1984/">LinkedIn</Link>
          <Link className="github" href="https://github.com/johnsonr84">Github</Link>
          <Link className="twitter" href="https://twitter.com/RobThatBeat">Twitter</Link>
        </div>
      </div>
    )
  }

}

module.exports = Nav
