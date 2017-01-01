import React from 'react'
import renderer from 'react-test-renderer'
import Years from '../modules/Years'

describe('Years', () => {
  it('should render properly', () => {
    const component = renderer.create(<Years/>)
    let tree = component.toJSON()
    
    expect(tree).toMatchSnapshot()
  })
})
