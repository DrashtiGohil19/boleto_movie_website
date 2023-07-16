import React from 'react'
import Header from './Header'
import News from './News'
import Sport_ticket_banner from './Sport_ticket_banner'
import Seat_title from './Seat_title'
import Checkout_Event from './Checkout_Event'

function Sport_checkout() {
  return (
    <div>
      <Header/>
      <Sport_ticket_banner/>
      <Seat_title/>
      <Checkout_Event/>
      <News/>
    </div>
  )
}

export default Sport_checkout
