import React, { Component } from 'react'
export default class Sidebar extends Component {

  constructor (props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.updatePortfolio(event.target.id)
  }

  render() {
    const projectData=this.props.portfolioData
    const tags=[]
    projectData.map((project,index)=> {
      project.tags.map((c, i, a)=> {
        if(!tags.includes(c)) {
          tags.push(c)
        }
      })
    })

    return (
      <ul className="sidebar-tags">
      {tags.map((tag, index)=>{
        return <li key={tag}><button id={tag} onClick={this.handleClick}>{tag}</button></li>
      })}

      </ul>
    )
  }

}
