import React from 'react'
import Header from './Header'
import Speaker_banner from './Speaker_banner'
import Single_speaker from './Single_speaker'
import Event_speaker from './Event_speaker'
import News from './News'

function Speaker() {
  return (
    <div>
      <Header/>
      <Speaker_banner/>
      <Single_speaker/>
      <Event_speaker/>
      <News/>
    </div>
  )
}

export default Speaker
