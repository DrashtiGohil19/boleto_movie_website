import React from 'react'
import Header from './Header'
import App_speaker from './App_speaker'
import News from './News'
import Down_banner from './Down_banner'
import Down_speaker from './Down_speaker'

function App_down() {
  return (
    <div>
      <Header/>
      <Down_banner/>
      <App_speaker/>
      <Down_speaker/>
      <News/>
    </div>
  )
}

export default App_down
