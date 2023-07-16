import React from 'react'
import Header from './Header'
import Seat_title from './Seat_title'
import News from './News'
import Sport_ticket_banner from './Sport_ticket_banner'
import Sport_event from './Sport_event'

function Sport_ticket() {
  return (
    <div>
      <Header/>
      <Sport_ticket_banner/>
      <Seat_title/>
      <Sport_event/>    
      <News/>
    </div>
  )
}

export default Sport_ticket
