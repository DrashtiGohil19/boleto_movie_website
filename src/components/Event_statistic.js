import React from 'react'

function Event_statistic() {
  return (
    <div>
      {/* ==========Statistics-Section========== */}
      <section className="statistics-section padding-top padding-bottom bg_img pb-lg-0" data-background="assets/images/statistics/statistics-bg01.jpg">
        <div className="container">
          <div className="section-header-3">
            <span className="cate">what we have done</span>
            <h2 className="title">our recent STATISTICS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
          </div>
          <div className="statistics-wrapper">
            <div className="row mb--20">
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-thumb">
                    <img src="assets/images/statistics/stat01.png" alt="statistics" />
                  </div>
                  <div className="stat-content">
                    <h3 className=" counter-item odometer" data-odometer-final={450} />
                    <span className="info">Tickets Booked</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-thumb">
                    <img src="assets/images/statistics/stat02.png" alt="statistics" />
                  </div>
                  <div className="stat-content">
                    <h3 className=" counter-item odometer" data-odometer-final={500} />
                    <span className="info">Usefull Sessions</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-thumb">
                    <img src="assets/images/statistics/stat03.png" alt="statistics" />
                  </div>
                  <div className="stat-content">
                    <h3 className=" counter-item odometer" data-odometer-final={28} />
                    <span className="info">Talented Speakers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Statistics-Section========== */}
    </div>
  )
}

export default Event_statistic
