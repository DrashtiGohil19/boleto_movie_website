import React from 'react'

function Event_speaker() {
  return (
    <div>
      <section className="speaker-section padding-bottom padding-top">
        <div className="container">
          <div className="section-header-3">
            <span className="cate">listen to the</span>
            <h2 className="title">event speakers</h2>
            <p>World is committed to making participation in the event a harassment free experience for 
              everyone, regardless of level of experience, gender, gender identity and expression</p>
          </div>
          <div className="speaker--slider">
            <div className="speaker-slider owl-carousel owl-theme">
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="event-speaker.html">
                    <img src="assets/images/speaker/speaker01.jpg" alt="speaker" />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="event-speaker.html">
                      Gerard Bryan 
                    </a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="event-speaker.html">
                    <img src="assets/images/speaker/speaker02.jpg" alt="speaker" />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="event-speaker.html">
                      Raihan Rafuj
                    </a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="event-speaker.html">
                    <img src="assets/images/speaker/speaker03.jpg" alt="speaker" />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="event-speaker.html">
                      Bela Bose
                    </a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="event-speaker.html">
                    <img src="assets/images/speaker/speaker04.jpg" alt="speaker" />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="event-speaker.html">
                      Grass Hopper
                    </a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </div>
            <div className="speaker-prev">
              <i className="flaticon-double-right-arrows-angles" />
            </div>
            <div className="speaker-next">
              <i className="flaticon-double-right-arrows-angles" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Event_speaker
