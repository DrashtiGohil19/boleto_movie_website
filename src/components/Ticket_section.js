import React from 'react'

function Ticket_section() {
  return (
    <div className="event-facility padding-bottom padding-top">
      <div className="container"><div className="section-header-3">
        <span className="cate">simple pricing</span>
        <h2 className="title">make an appointment</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
      </div>
        <div className="row justify-content-center mb-30-none">
          <div className="col-md-6 col-lg-4 col-sm-10">
            <div className="ticket--item">
              <div className="ticket-thumb">
                <img src="assets/images/event/ticket/ticket01.png" alt="event" />
              </div>
              <div className="ticket-content">
                <span className="ticket-title">Standard Ticket</span>
                <h2 className="amount"><sup>$</sup>49</h2>
                <ul>
                  <li>Full access to all lectures and workshops</li>
                  <li className="del"><del>Video presentations</del></li>
                  <li className="del"><del>Meet all of our event speakers</del></li>
                </ul>
                <a href="#0" className="custom-button">book tickets</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-10">
            <div className="ticket--item two">
              <div className="hot">
                <span>hot</span>
              </div>
              <div className="ticket-thumb">
                <img src="assets/images/event/ticket/ticket02.png" alt="event" />
              </div>
              <div className="ticket-content">
                <span className="ticket-title">Premium Ticket</span>
                <h2 className="amount"><sup>$</sup>79</h2>
                <ul>
                  <li>Full access to all lectures and workshops</li>
                  <li>Video presentations</li>
                  <li className="del"><del>Meet all of our event speakers</del></li>
                </ul>
                <a href="#0" className="custom-button">book tickets</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-10">
            <div className="ticket--item three">
              <div className="ticket-thumb">
                <img src="assets/images/event/ticket/ticket03.png" alt="event" />
              </div>
              <div className="ticket-content">
                <span className="ticket-title">VIP Ticket</span>
                <h2 className="amount"><sup>$</sup>99</h2>
                <ul>
                  <li>Full access to all lectures and workshops</li>
                  <li>Video presentations</li>
                  <li>Meet all of our event speakers</li>
                </ul>
                <a href="#0" className="custom-button">book tickets</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Ticket_section
