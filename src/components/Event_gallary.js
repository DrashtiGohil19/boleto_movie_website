import React from 'react'

function Event_gallary() {
  return (
    <div>
      <div className="speaker-gallery">
        <div className="row m-0">
          <div className="col-md-6 p-0">
            <div className="row m-0">
              <div className="col-sm-6 p-0">
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery01.jpg" className="img-pop">
                      <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery01.jpg" alt="gallery" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-0">
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery02.jpg" className="img-pop">
                      <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery02.jpg" alt="gallery" />
                  </div>
                </div>
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a href="assets/images/gallery/gallery03.jpg" className="img-pop">
                      <i className="flaticon-loupe" />
                    </a>
                    <img src="assets/images/gallery/gallery03.jpg" alt="gallery" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="gallery-item">
              <div className="gallery-thumb">
                <a href="assets/images/gallery/gallery04.jpg" className="img-pop">
                  <i className="flaticon-loupe" />
                </a>
                <img src="assets/images/gallery/gallery04.jpg" alt="gallery" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Gallery-Section========== */}
    </div>
  )
}

export default Event_gallary
