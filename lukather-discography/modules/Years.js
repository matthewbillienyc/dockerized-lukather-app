import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  render() {
    var yearsList = this.props.years.map(function(year){
      return (<li key={year.year}><NavLink to={"/years/" + year.year}>{year.year}</NavLink></li>)
    })
    return (  
      <div>
        <h2>Years</h2>
        <ul>
        {yearsList}
        </ul>
        {this.props.children}
      </div>
    )
  }
})
