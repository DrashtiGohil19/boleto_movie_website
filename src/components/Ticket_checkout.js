import React from 'react'
import Header from './Header'
import Ticket_banner from './Ticket_banner'
import Ticket_title from './Ticket_title'
import News from './News'
import Checkout_Event from './Checkout_Event'

function Ticket_checkout() {
  return (
    <div>
      <Header/>
      <Ticket_banner/>
      <Ticket_title/>
      <Checkout_Event/>
      <News/>
    </div>
  )
}

export default Ticket_checkout
