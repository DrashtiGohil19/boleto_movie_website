import React from 'react'

function Contact_counter() {
  return (
    <div>
      <section className="contact-counter padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center mb-30-none">
            <div className="col-sm-6 col-md-3">
              <div className="contact-counter-item">
                <div className="contact-counter-thumb">
                  <i className="fab fa-facebook-f" />
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title odometer" data-odometer-final={130}>0</h5>
                    <h5 className="title">k</h5>
                  </div>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="contact-counter-item active">
                <div className="contact-counter-thumb">
                  <i className="fas fa-users" />
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title odometer" data-odometer-final={35}>0</h5>
                    <h5 className="title">k</h5>
                  </div>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="contact-counter-item">
                <div className="contact-counter-thumb">
                  <i className="fab fa-twitter" />
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title odometer" data-odometer-final={47}>0</h5>
                    <h5 className="title">k</h5>
                  </div>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="contact-counter-item">
                <div className="contact-counter-thumb">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title odometer" data-odometer-final={291}>0</h5>
                    <h5 className="title">k</h5>
                  </div>
                  <p>Subscribers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact_counter
