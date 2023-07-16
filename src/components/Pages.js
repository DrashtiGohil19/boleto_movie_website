import React from 'react'
import Header from './Header'
import About_us from './About_us'
import News from './News'
import Page_speker from './Page_speker'
import Philisophy from './Philisophy'
import About_counter from './About_counter'
import Client from './Client'
import About_speaker from './About_speaker'
import About_gallary from './About_gallary'
import Tour from './Tour'

function Pages() {
  return (
    <div>
      <Header/>
      <About_us/>
      <Page_speker/>
      <Philisophy/>
      <About_counter/>
      <Client/>
      <About_speaker/>
      <About_gallary/>
      <Tour/>
      <News/>
    </div>
  )
}

export default Pages
