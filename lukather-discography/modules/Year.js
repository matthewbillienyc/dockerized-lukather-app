import React from 'react'
import 'whatwg-fetch'

export default React.createClass({
  getInitialState(){
    return { yearData: { year: '', albums: [] } }
  },
  
  getYear(){
    let self = this
    fetch(`http://localhost:3000/v1/years/${this.props.params.year}`)
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        self.setState({ yearData: json.year })
      })
  },
  
  render() {
    this.getYear()
    let albumsList = this.state.yearData.albums.map(function(album){
      return (<li key={album.title + album.artist}>{album.title} - {album.artist}</li>)
    })
    return (
      <div>
        <h2>{this.props.params.year}</h2>
        <ul className='album-list'>
          {albumsList}
        </ul>
      </div>
    )
  }
})
