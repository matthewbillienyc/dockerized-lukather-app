import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div className='container'>
        <h1 className='main-header'>Steve Lukather Discography</h1>
        <div className='nav'>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/years">Years</NavLink>
          <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
        </div>
        {this.props.children || <Home/> }
      </div>
    )
  }
})
