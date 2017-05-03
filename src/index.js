import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { EventEmitter } from 'events'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'
import Screen5 from './screens/Screen5'
import './styles/app.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1
    }
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
      this.updateScreen({newScreenIndex: screenIndex})
    })
  }

  updateScreen({newScreenIndex}) {
    this.setState({screenIndex: newScreenIndex})
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">THIS IS A HEADER</div>
        <div className="app-wrapper">
          <Nav
            eventEmitter={this.eventEmitter}
            screenIndex={this.state.screenIndex} />
          <div className="main-content">
            {React.cloneElement(this.props.children, {
              eventEmitter: this.eventEmitter
            })}
          </div>
        </div>
        <Footer
          eventEmmiter={this.eventEmmiter}
          screenIndex={this.state.screenIndex} />
      </div>
    )
  }

}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Screen2} />
      <Route path="/screen1" component={Screen1} />
      <Route path="/screen2" component={Screen2} />
      <Route path="/screen3" component={Screen3} />
      <Route path="/screen4" component={Screen4} />
      <Route path="/screen5" component={Screen5} />
    </Route>
  </Router>,
  document.getElementById('root')
);
