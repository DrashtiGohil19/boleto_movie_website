import React from 'react'
import Header from './Header'
import Event_banner from './Event_banner'
import Ticket from './Ticket'
import Event_ticket from './Event_ticket'
import Event_section from './Event_section'
import News from './News'

function Event() {
  return (
    <div>
      <Header/>
      <Event_banner/>
      <Ticket/>
      <Event_ticket/>
      <Event_section/>
      <News/>
    </div>
  )
}

export default Event
