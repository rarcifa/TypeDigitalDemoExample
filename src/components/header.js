import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1100,
        padding: `1rem 1rem`,
      }}
    >
      <nav style={{ margin: 0 }} className="navbar navbar-expand-lg navbar-sticky navbar-airy navbar-light bg-dark bg-fixed-dark fixed-top">
        <div className="container">
          {/* Navbar Header */}
          <a className="navbar-brand ml-1 mr-2 logo" href="/"
            style={{
              position: `relative`,
              backgroundImage: `url(` + logo + `)`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `contain`,
              width: "13%",
              filter: `brightness(100)`
            }}
          > </a>


          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
          {/* Navbar Collapse */}
          <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
            {/*N avbar Menue */}
            <ul className="navbar-nav me-auto ml-n2 mb-2 mb-lg-0">
              <li className="nav-item mr-2">
                <span className="text-white text-bold nav-link text-light-2 active nav-brand-font mr-4">Media</span>

              </li>
              <li className="nav-item mr-2">

                <a className="nav-link text-light active nav-font" aria-current="page" href="/">About</a>
              </li>

              <li className="nav-item mr-2">
                <a className="nav-link text-light active nav-font" aria-current="page" href="/news">Press</a>
              </li>

              <li className="nav-item mr-2">
                <a className="nav-link text-light active nav-font" aria-current="page" href="https://unigamer.com">Social</a>
              </li>

            </ul>
            {/* Right Navbar Area */}
            <ul className="navbar-nav ml-auto">
              <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
                {/* Icon 1 */}
                <a className="ml-1 mr-2 text-light text-sm" href="https://www.instagram.com/unigamer_official/">
                  <i className="fas fa-hashtag"></i>
                </a>
                <a className="ml-1 mr-2 text-light text-sm" href="https://twitter.com/unigamer_">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="ml-1 mr-3 text-light text-sm" href="https://www.facebook.com/unigamerofficial/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <div className="nav-item na vbar-icon-link" data-toggle="search">
                  <div className="dropdown text-sm">
                    <button className="btn btn-nav dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-globe"></i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item text-sm" href="/"><img
                        src="https://flagcdn.com/w20/gb.png"
                        srcset="https://flagcdn.com/w40/gb.png 2x"
                        width="20"
                        alt="United Kingdom" /><span className="ml-2 text-dark">English</span></a>
                      <a className="dropdown-item text-sm" href="/de-DE"><img
                        src="https://flagcdn.com/w20/de.png"
                        srcset="https://flagcdn.com/w40/de.png 2x"
                        width="20"
                        alt="Germany" /><span className="ml-2 text-dark">German</span></a>
                    </div>
                  </div>
                </div>
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

