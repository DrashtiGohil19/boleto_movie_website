import React from 'react'

function Banner() {
  return (

    <div>
      {/* <!-- ==========Banner-Section========== --> */}
      <section className="banner-section">
        <div className="banner-bg bg_img bg-fixed" data-background="assets/images/banner/banner01.jpg" />
        <div className="container">
          <div className="banner-content">
            <h1 className="title  cd-headline clip"><span className="d-block">book your</span> tickets for&nbsp;
              <span className="color-theme cd-words-wrapper p-0 m-0">
                <b className="is-visible">Movie</b>
                <b>Event</b>
                <b>Sport</b>
              </span>
            </h1>
            <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
          </div>
        </div>
      </section>
      {/* <!-- ==========Banner-Section========== --> */}

    </div>
  )
}

export default Banner
