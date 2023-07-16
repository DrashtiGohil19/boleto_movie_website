import React from 'react'

function Client() {
  return (
    <div>
      <section className="client-section padding-bottom padding-top bg_img" data-background="assets/images/client/client-bg.jpg">
        <div className="container">
          <div className="section-header-3">
            <span className="cate">testimonials</span>
            <h2 className="title">the fans have spoken</h2>
          </div>
          <div className="client-slider owl-carousel owl-theme">
            <div className="client-item">
              <div className="client-thumb">
                <img src="assets/images/client/client01.jpg" alt="client" />
              </div>
              <div className="client-content">
                <h5 className="title">
                  <a href="#0">Rafuz</a>
                </h5>
                <span className="info"><i className="fas fa-check" /> Verified</span>
                <blockquote className="client-quote">
                  "Great prices and Cheaper than other sites! Easy to use."
                </blockquote>
              </div>
            </div>
            <div className="client-item">
              <div className="client-thumb">
                <img src="assets/images/client/client03.jpg" alt="client" />
              </div>
              <div className="client-content">
                <h5 className="title">
                  <a href="#0">Rudra</a>
                </h5>
                <span className="info"><i className="fas fa-check" /> Verified</span>
                <blockquote className="client-quote">
                  "Id iure est sint at illum ipsum non beatae cumque"
                </blockquote>
              </div>
            </div>
            <div className="client-item">
              <div className="client-thumb">
                <img src="assets/images/client/client02.jpg" alt="client" />
              </div>
              <div className="client-content">
                <h5 className="title">
                  <a href="#0">Raihan</a>
                </h5>
                <span className="info"><i className="fas fa-check" /> Verified</span>
                <blockquote className="client-quote">
                  "amet consectetur adipisicing elit. Animi, ut consequuntur"
                </blockquote>
              </div>
            </div>
            <div className="client-item">
              <div className="client-thumb">
                <img src="assets/images/client/client04.jpg" alt="client" />
              </div>
              <div className="client-content">
                <h5 className="title">
                  <a href="#0">Shahidul</a>
                </h5>
                <span className="info"><i className="fas fa-check" /> Verified</span>
                <blockquote className="client-quote">
                  "Quia voluptatum animi libero recusandae error."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Client
