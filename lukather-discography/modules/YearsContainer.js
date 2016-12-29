import React from 'react'
import Years from './Years'

export default React.createClass({
  getInitialState(){
    return {
      
    }
  },
  
  setYearsState(){
    let years = this.props.yearsService.getYears()
    this.setState
  },
  
  render() {
    return (
        <Years/>
    )
  }
})
