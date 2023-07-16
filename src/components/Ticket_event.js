import React from 'react'
import Header from './Header'
import Ticket_title from './Ticket_title'
import Ticket_banner from './Ticket_banner'
import Ticket_section from './Ticket_section'
import News from './News'

function Ticket_event() {
    return (
        <div>
            <Header />
            <Ticket_banner />
            <Ticket_title />
            <Ticket_section />
            <News />
        </div>
    )
}

export default Ticket_event
