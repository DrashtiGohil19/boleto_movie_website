import React from 'react'

function Detail_banner() {
  return (
    <div>
      {/* ==========Banner-Section========== */}
      <section className="details-banner bg_img" data-background="assets/images/banner/banner03.jpg">
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-thumb">
              <img src="assets/images/movie/venus.jpg" alt="movie" />
              <a href="https://www.youtube.com/embed/KGeBMAgc46E" className="video-popup">
                <img src="assets/images/movie/video-button.png" alt="movie" />
              </a>
            </div>
            <div className="details-banner-content offset-lg-3">
              <h3 className="title">Venus</h3>
              <div className="tags">
                <a href="#0">English</a>
                <a href="#0">Hindi</a>
                <a href="#0">Telegu</a>
                <a href="#0">Tamil</a>
              </div>
              <a href="#0" className="button">horror</a>
              <div className="social-and-duration">
                <div className="duration-area">
                  <div className="item">
                    <i className="fas fa-calendar-alt" /><span>06 Dec, 2020</span>
                  </div>
                  <div className="item">
                    <i className="far fa-clock" /><span>2 hrs 50 mins</span>
                  </div>
                </div>
                <ul className="social-share">
                  <li><a href="#0"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#0"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#0"><i className="fab fa-pinterest-p" /></a></li>
                  <li><a href="#0"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a href="#0"><i className="fab fa-google-plus-g" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}
    </div>
  )
}

export default Detail_banner
