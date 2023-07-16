import React from 'react'
import { Link } from 'react-router-dom'

function Blog_banner() {
  return (
    <div>
      <section className="main-page-header speaker-banner bg_img" data-background="assets/images/banner/banner07.jpg">
        <div className="container">
          <div className="speaker-banner-content">
            <h2 className="title">blog - 01</h2>
            <ul className="breadcrumb">
              <li>
                <Link to="/home1">
                  Home
                </Link>
              </li>
              <li>
                blog
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Blog_banner
