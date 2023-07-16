import React from 'react'
import Header from './Header'
import Contact_banner from './Contact_banner'
import Contact_form from './Contact_form'
import Contact_counter from './Contact_counter'
import News from './News'

function Contact() {
  return (
    <div>
      <Header/>
      <Contact_banner/>
      <Contact_form/>
      <Contact_counter/>
      <News/>
    </div>
  )
}

export default Contact
