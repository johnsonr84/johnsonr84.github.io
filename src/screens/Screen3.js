import React, { Component } from 'react'
import Project from '../portfolio/Project.js'
import Sidebar from '../portfolio/Sidebar.js'
import portfolioData from '../portfolio.json'

class Screen3 extends Component {
  constructor(props) {
    super(props)
    this.updatePortfolio=this.updatePortfolio.bind(this)
    this.setFilterResults=this.setFilterResults.bind(this)
    this.state={
      portfolioData: portfolioData
    }
  }

  componentWillMount() {
    this.props.eventEmitter.emit("navigateScreen", {screenIndex: 3})
  }

  updatePortfolio(id) {
    console.log(id);
    this.setState({
      portfolioData: this.setFilterResults(id)
    })
    }

    setFilterResults(id) {
      const array=[]
      portfolioData.map((project, index)=> {
        if(project.tags.includes(id)) {
          array.push(project)
        }
      })
      return array
    }

  render() {
    const data=this.state.portfolioData
    return (
      <div className="screen screen3">
          <h1>PORTFOLIO</h1>
          <Sidebar portfolioData={portfolioData} updatePortfolio={this.updatePortfolio} />
          <p>Checkout some of the most recent projects that I have created.</p>
          {data.map((project, index)=>{
            return <Project portfolioData={data[index]} key={"project"+ index} />
          })}
      </div>
    )
  }

}

module.exports = Screen3
