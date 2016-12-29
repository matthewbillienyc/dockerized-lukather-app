import React from 'react'
import Years from './Years'

const yearsList = [
  {
    year: 1977
  },
  {
    year: 1978
  },
  {
    year: 1979
  }
]

export default React.createClass({
  getInitialState(){
    return {
      years: []
    }
  },

  componentDidMount(){
    this.setYearsState(yearsList)
  },
  
  setYearsState(years){    
    this.setState({years: years})
  },
  
  render() {
    return (
        <Years years={this.state.years}/>
    )
  }
})
