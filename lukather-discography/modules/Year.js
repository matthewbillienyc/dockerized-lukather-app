import React from 'react'
import 'whatwg-fetch'

export default React.createClass({
  render() {
    console.log(this.props)
    let albumsList = this.props.currentYear.albums.map(function(album){
      return (<li key={album.title + album.artist}>{album.title} - {album.artist}</li>)
    })
    return (
      <div>
        <ul className='album-list'>
          {albumsList}
        </ul>
      </div>
    )
  }
})
