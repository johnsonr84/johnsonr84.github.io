import React, { Component } from 'react'

class Screen4 extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateScreen", {screenIndex: 4})
  }

  render() {
    return (
      <div className="screen screen4">
        <h2>Articles, Videos and Tutorials</h2>
        <p>I love to write, share stories and spread insiration to others!</p>
        <div className="blog-tag">
          <ul>
            <li className="blog-tag-item-01"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">CSS</a></li>
            <li className="blog-tag-item-02"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">ES6</a></li>
            <li className="blog-tag-item-03"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">HTML5</a></li>
            <li className="blog-tag-item-04"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">JavaScript</a></li>
            <li className="blog-tag-item-05"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">jQuery</a></li>
            <li className="blog-tag-item-06"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">Mobile</a></li>
            <li className="blog-tag-item-07"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">NodeJS</a></li>
            <li className="blog-tag-item-08"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">Other</a></li>
            <li className="blog-tag-item-09"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">PHP</a></li>
          </ul>
          <ul>
            <li className="blog-tag-item-10"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">Sublime Text</a></li>
            <li className="blog-tag-item-11"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">The Business of Web Dev</a></li>
            <li className="blog-tag-item-12"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">Video Series</a></li>
            <li className="blog-tag-item-13"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">Word Press</a></li>
            <li className="blog-tag-item-14"><a href="https://medium.com/@robertcjohnson1984/day-1-recap-and-reflection-b20b7bbf290b">Workflow + Tooling</a></li>
          </ul>
        </div>
      </div>


    )
  }

}

module.exports = Screen4
