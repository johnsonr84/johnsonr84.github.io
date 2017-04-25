import React, { Component } from 'react'
import EtherService from '../services/EtherService'
import _ from 'lodash'

class Screen2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      etherPrices: []
    }
  }

  componentWillMount() {
    this.props.eventEmitter.emit("navigateScreen", {screenIndex: 2})

    EtherService.getEtherPrice()
    .then((data) => {
      this.setState({etherPrices: data})
    })
  }

  render() {
    var TableRows = []

    _.each(this.state.etherPrices, (etherPrice) => {
      TableRows.push(
        <tr key={etherPrice.day}>
          <td>{etherPrice.day}</td>
          <td>{etherPrice.price}</td>
        </tr>
      )
    })

    return (
      <div className="screen screen2">
        <h1>About, Skillset and Interest</h1>
        <table>
          <thead>
            <tr>
              <th>CORE</th>
              <th>LIBRARIES</th>
              <th>JAVASCRIPT</th>
            </tr>
          </thead>
          <tbody>
            {TableRows}
          </tbody>
        </table>
        <p>I'm Rob Johnson, a junior developer and designer from Salt Lake City, Utah. I love to help others and bring positive energy wherever I go. I've been creating on the web for 2 months and I am currently enrolled in Front End Engineering program at The Iron Yard in Salt Lake City. I hangout on social media and would love to meet you!</p>
        <p>I'm very passionate about business, entrepreneurship, and performing music. I have been very fortunate to have been able to do all three as a career. My newfound passion is development and design, of which, I plan to make an awesome career building plateforms that help individuals and businesses achieve their goals.</p>
        <p>I graduated from the University of Wyoming where I obtained my Bachelor of Music Performance Degree in Percussion Performance. I attended the University of Utah where I continued my music studies in Percussion Performance at the graduate level. During this time I served the department as a teaching assistant. All this music education is a fancy way of saying I know how to lay down a mad drum beat, improve and think creatively like a musician.</p>
        <p>This section would not be complete if I didn't address another huge passion of mine, Speedskating. I retired from Speedskating in 2010 after attempting to qualify for the Olympics. Now days I still make my way out to the Olympic Oval in kearns, Utah to hammer out laps. I am involved in the skate community and still have the desire to go fast!</p>
        <p>When I am not learning programming, I love to spend time with my girlfriend Nichole and our super cute rottwielers, Samsom and Delilah. Of course, we make plenty of time for our family and friends.</p>
        <p>If you have a question about me, or would like to read more, I run an Ask Me Anything on GitHub</p>
      </div>
    )
  }

}







module.exports = Screen2
