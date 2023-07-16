import React from 'react'

function App_speaker() {
  return (
    <div>
      <section className="apps-seciton padding-top pt-lg-0">
        <div className="container">
          <div className="apps-wrapper bg-six padding-top padding-bottom">
            <div className="bg_img apps-bg" data-background="assets/images/apps/apps01.png" />
            <div className="section-header-3">
              <span className="cate">get Boleto  app</span>
              <h2 className="title">app download</h2>
            </div>
            <div className="row">
              <div className="col-lg-7 offset-lg-5">
                <div className="content">
                  <h5 className="title">MAKE LIFE EASIER</h5>
                  <p>
                    As the largest mobile platform in the country, we have the right
                    services, the know-how and the expertise to make your buying
                    transition to mobile simple, easy and painless.
                  </p>
                  <ul className="app-button">
                    <li>
                      <a href="#0">
                        <img src="assets/images/apps/apps03.png" alt="apps" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <img src="assets/images/apps/apps02.png" alt="apps" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="counter--area">
                  <div className="counter-item">
                    <div className="d-flex justify-content-center align-items-center mb-10">
                      <h4 className="odometer title" data-odometer-final={50} />
                      <h4 className="title">M+</h4>
                    </div>
                    <p className="info">apps downloads</p>
                  </div>
                  <div className="counter-item">
                    <div className="d-flex justify-content-center align-items-center mb-10">
                      <h4 className="odometer title" data-odometer-final={15} />
                      <h4 className="title">M+</h4>
                    </div>
                    <p className="info">tickets a month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default App_speaker
