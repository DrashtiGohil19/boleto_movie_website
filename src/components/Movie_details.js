import React from 'react'
import Header from './Header'
import Detail_banner from './Detail_banner'
import Details_book from './Details_book'
import Details_movie from './Details_movie'
import News from './News'

function Movie_details() {
  return (
    <div>
      <Header/>
      <Detail_banner/>
      <Details_book/>
      <Details_movie/>
      <News/>
    </div>
  )
}

export default Movie_details
