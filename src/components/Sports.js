import React from 'react'
import Header from './Header'
import News from './News'
import Event_section from './Event_section'
import Ticket from './Ticket'
import Sport_banner from './Sport_banner'

function Sports() {
  return (
    <div>
      <Header/>
      <Sport_banner/>
       <Ticket/> 
      <Event_section/>
      <News/>
    </div>
  )
}

export default Sports
