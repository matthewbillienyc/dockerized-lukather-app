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
      return(<NavLink key={year.year} to={"/years/" + year.year}><li>{year.year}</li></NavLink>)
    })
    return (  
      <div className='main-content'>
        <div className='list-container'>
          <ul className='scrollable-list'>        
            {yearsList}
          </ul>
        </div>
        <div className='albums-list'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
