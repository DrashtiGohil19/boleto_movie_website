import React from 'react'

function Loader() {
  return (
    <div>
      {/* ==========Preloader========== */}
      <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span />
              <span />
            </div>
          </div>
        </div>
        {/* ==========Preloader========== */}
        {/* ==========Overlay========== */}
        <div className="overlay" />
        <a href="#0" className="scrollToTop">
          <i className="fas fa-angle-up" />
        </a>
        {/* ==========Overlay========== */}
      </div>
  )
}

export default Loader
