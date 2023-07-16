import React from 'react'
import Header from './Header'
import Grid_banner from './Grid_banner'
import Ticket from './Ticket'
import Movie from './Movie'
import News from './News'

function Movie_list() {
  return (
    <div>
      <Header/>
      <Grid_banner/>
      <Ticket/>
      <Movie/>
      <News/>
    </div>
  )
}

export default Movie_list
