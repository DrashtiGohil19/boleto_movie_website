import React from 'react'

function Event_book() {
  return (
    <div>
      <section className="event-book-search padding-top pt-lg-0">
        <div className="container">
          <div className="event-search bg_img" data-background="assets/images/ticket/ticket-bg01.jpg">
            <div className="event-search-top">
              <div className="left">
                <h3 className="title">Digital Marketing Conference -2020</h3>
              </div>
              <div className="right">
                <ul className="countdown">
                  <li>
                    <h2><span className="days">00</span></h2>
                    <p className="days_text">days</p>
                  </li>
                  <li>
                    <h2><span className="hours">00</span></h2>
                    <p className="hours_text">hrs</p>
                  </li>
                  <li>
                    <h2><span className="minutes">00</span></h2>
                    <p className="minu_text">min</p>
                  </li>
                  <li>
                    <h2><span className="seconds">00</span></h2>
                    <p className="seco_text">sec</p>
                  </li>
                </ul>
                <a href="#0" className="custom-button">book tickets</a>
              </div>
            </div>
            <div className="event-search-bottom">
              <div className="contact-side">
                <div className="item">
                  <div className="item-thumb">
                    <img src="assets/images/event/icon/event-icon01.png" alt="event" />
                  </div>
                  <div className="item-content">
                    <span className="up">3 Days (Friday-Sunday)</span>
                    <span>70+ Workshops</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item-thumb">
                    <img src="assets/images/event/icon/event-icon02.png" alt="event" />
                  </div>
                  <div className="item-content">
                    <span className="up">17 South Sherman Street</span>
                    <span>Astoria, NY 11106</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item-thumb">
                    <img src="assets/images/event/icon/event-icon03.png" alt="event" />
                  </div>
                  <div className="item-content">
                    <span className="up">Drop us a line:</span>
                    <a href="MailTo:hello@Boleto .com"><span className="__cf_email__" data-cfemail="7e161b1212113e3c11121b0a11">[email&nbsp;protected]</span> .com</a>
                  </div>
                </div>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#0" className>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#0" className="active">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="#0" className>
                    <i className="fab fa-google" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Event_book
