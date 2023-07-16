import React from 'react'
import Ticket from './Ticket';
import Banner from './Banner';
import Movie_Main from './Movie_Main';
import News from './News';
import Header from './Header';
import Loader from './Loader';

function Home1() {
  return (
    <div>
      {/* <Loader/> */}
      <Header/>
      <Banner/>
      <Ticket/>
      <Movie_Main/>
      <News/>
    </div>
  )
}

export default Home1
