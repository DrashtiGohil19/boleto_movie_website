import React from 'react'
import Seat_vanue from './Seat_vanue'
import Seat_title from './Seat_title'
import CheckMovie from './CheckMovie'
import News from './News'
import Header from './Header'

function Movie_checkout() {
  return (
    <div>
        <Header/>
      <Seat_vanue/>
      <Seat_title/>
      <CheckMovie/>
      <News/>
    </div>
  )
}

export default Movie_checkout
