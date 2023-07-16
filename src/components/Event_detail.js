import React from 'react'
import Header from './Header'
import News from './News'
import Event_detail_banner from './Event_detail_banner'
import Event_book from './Event_book'
import Event_about from './Event_about'
import Event_gallary from './Event_gallary'
import Event_speaker from './Event_speaker'
import Event_statistic from './Event_statistic'
import Event_para from './Event_para'
import Event_faq from './Event_faq'

function Event_detail() {
  return (
    <div>
      <Header/>
      <Event_detail_banner/>
      <Event_book/>
      <Event_about/>
      <Event_gallary/>
      <Event_speaker/>
      <Event_statistic/>
      <Event_faq/>
      <Event_para/>
      <News/>
    </div>
  )
}

export default Event_detail
