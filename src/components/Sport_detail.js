import React from 'react'
import Header from './Header'
import Event_detail_banner from './Event_detail_banner'
import News from './News'
import Event_book from './Event_book'
import Event_statistic from './Event_statistic'
import Sport_about from './Sport_about'
import Event_faq from './Event_faq'
import Sport_sponcer from './Sport_sponcer'

function Sport_detail() {
  return (
    <div>
      <Header/>
      <Event_detail_banner/>
      <Event_book/>
      <Sport_about/>
      <Event_statistic/>
      <Event_faq/>
      <Sport_sponcer/>
      <News/>
    </div>
  )
}

export default Sport_detail
