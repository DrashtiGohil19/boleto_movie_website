import React from 'react'
import Header from './Header'
import Grid_banner from './Grid_banner'
import Ticket from './Ticket'
import Movie_Main from './Movie_Main'
import News from './News'

function Movie_grid() {
  return (
    <div>
      <Header/>
      <Grid_banner/>
      <Ticket/>
      <Movie_Main/>
      <News/>
    </div>
  )
}

export default Movie_grid;
