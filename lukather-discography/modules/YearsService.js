import React from 'react'
import 'whatwg-fetch'

const years = [
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

export default const YearsService = {
  getYears(){
    return years
  }
}
