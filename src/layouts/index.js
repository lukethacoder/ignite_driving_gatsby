import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from "../assets/logo.svg"

// import { TypographyStyle, GoogleFont } from 'react-typography'
// import typography from 'utils/typography'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import { faCar } from '@fortawesome/fontawesome-free-solid'
import { faDollarSign } from '@fortawesome/fontawesome-free-solid'
import { faInfo } from '@fortawesome/fontawesome-free-solid'
import { faPhone } from '@fortawesome/fontawesome-free-solid'

import './style.scss'
import './index.scss'



/* stateless function */
const Header = () => (
  <nav className="navbar">
    <ul className="navContact">
        <li><Link to="/">0434 833 131</Link></li>
        <li><Link to="/">margaret@ignitedriving.com.au</Link></li>
      </ul>
    <section className="topNav">
      
      <Link to="/"><img src={logo} className="logo_img" alt="Logo"/></Link>
    </section>

    <section className="bottomNav">
      <ul className="navMenuList">
        <li>
          
          <Link to="/WhatWeOffer/"><FontAwesomeIcon icon={faCar}/>What We Offer</Link>
        </li>
        <li>
            <Link to="/"><FontAwesomeIcon icon={faDollarSign}/>Pricing</Link>
        </li>
        <li className="navActive">
          <Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link>
        </li>
        <li>
          <Link to="/WhatWeOffer/"><FontAwesomeIcon icon={faInfo}/>About</Link>
        </li>
        <li>
          <Link to="/"><FontAwesomeIcon icon={faPhone}/>Contact</Link>
        </li>
      </ul>
      <Link className="bookNowNav" to="/">BOOK NOW</Link>
    </section>
  </nav>
)

const Footer = () => (
  <footer>
    <section>
    </section>
    <section>
      <ul>
        <li><Link to="/">Privacy</Link></li>
        <li><Link to="/">Terms & Conditions</Link></li>
        <li><Link to="/">Sitemap</Link></li>
      </ul>
      <Link to="/">@ 2018 All Rights Reserved</Link>
      <Link to="/">Created by Luke Secomb Digital</Link>
    </section>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ignite Driving"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      script={[
        {"src": "https://use.fontawesome.com/releases/v5.0.6/js/all.js", "type": "text/javascript"}
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
