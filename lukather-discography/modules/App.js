import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className='main-header'>Steve Lukather Discography</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/years">Years</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
        {this.props.children || <Home/> }
      </div>
    )
  }
})
