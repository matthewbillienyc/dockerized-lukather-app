import React from 'react'
import Year from '../modules/Year'
import renderer from 'react-test-renderer'

test('Year creates list items for each album', () => {
  let props = {
    year: '1977',
    albums: [
      {
        title: 'Rock On',
        artist: 'MJ'
      },
      {
        title: 'Album 2',
        artist: 'Artist 2'
      }
    ]
  }
  
  const component = renderer.create(
    <Year currentYear={props}/>
  )

  let tree = component.toJSON()
  
  expect(tree).toMatchSnapshot()
})
