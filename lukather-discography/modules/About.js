import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className='about'>
          Well, hello! I am a HUGE Toto fan, and decided to make a (slightly) interactive Discography application for the music of Steve Lukather! There are two components to this app, a front end React application running on a Node Express server, and a backend Rails 5 API application. Both are put into Docker containers and spun up using docker-compose!
      </div>
    )
  }
})
