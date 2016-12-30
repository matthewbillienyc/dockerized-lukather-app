import React from 'react'
import NavLink from './NavLink'
import 'whatwg-fetch'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState(){
    return { years: [] }
  },

  componentDidMount(){
    this.getYears()
  },

  getYears(){
    let self = this
    fetch('http://localhost:3000/v1/years', { credentials: 'include' })
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        self.setState({ years: json.years })
      })
  },

  render() {
    let yearsList = this.state.years.map(function(year){
      return(<li key={year.year}><NavLink to={"/years/" + year.year}>{year.year}</NavLink></li>)
    })
    return (  
      <div className='grid'>
        <div className='col-half'>
          <h2>Years</h2>
          <ul>        
            {yearsList}
          </ul>
        </div>
        <div className='col-half'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
