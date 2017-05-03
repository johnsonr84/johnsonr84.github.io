import React, { Component } from 'react'

export default class Project extends Component {


  render() {
    const projectData=this.props.portfolioData
    return (
      <div className="project">
        <h2>{projectData.projectName}</h2>
        <img className="portfolioImage" src={projectData.image} alt={projectData.projectName} />
        <ul>
        {projectData.tags.map((tag,index)=> {
          return <li>{tag}</li>
        })}
        </ul>
      </div>
    )
  }

}
