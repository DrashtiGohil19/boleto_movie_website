import React from 'react'

function Down_speaker() {
  return (
    <div>
      <section className="feature-section padding-bottom padding-top">
        <div className="container">
          <div className="section-header-3">
            <span className="cate">POWERFUL and FLEXIBLE</span>
            <h2 className="title">robust feature</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque est, aliquam eu
              dignissim eget, eleifend at nunc. Curabitur non dapibus nulla.
            </p>
          </div>
          <div className="row justify-content-center mb-30-none">
            <div className="col-sm-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-thumb">
                  {/* <img src="./assets/images/feature/icon01.png" alt="feature"> */}
                  <i className="fas fa-ship" />
                </div>
                <div className="feature-content">
                  <h5 className="title">Brand New</h5>
                  <p>Brand New User Interface with Latest Technology</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="feature-item active">
                <div className="feature-thumb">
                  {/* <img src="./assets/images/feature/icon02.png" alt="feature"> */}
                  <i className="fas fa-store-alt" />
                </div>
                <div className="feature-content">
                  <h5 className="title">seat map</h5>
                  <p>New Seat Map Feature for Ease of Ticket Booking</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-thumb">
                  {/* <img src="./assets/images/feature/icon03.png" alt="feature"> */}
                  <i className="fab fa-java" />
                </div>
                <div className="feature-content">
                  <h5 className="title">F&amp;B</h5>
                  <p>Buy Food While Booking Tickets. Relax and Enjoy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-thumb">
                  {/* <img src="./assets/images/feature/icon04.png" alt="feature"> */}
                  <i className="fas fa-ticket-alt" />
                </div>
                <div className="feature-content">
                  <h5 className="title">ticket filter</h5>
                  <p>Filter Your Movie Based on choose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Down_speaker
