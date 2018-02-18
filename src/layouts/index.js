import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from "../assets/logo.svg"
import bgimg from "../assets/bgimg.jpg"
import adta from "../assets/adta.png"
import k2d from "../assets/k2d.png"

// import { TypographyStyle, GoogleFont } from 'react-typography'
// import typography from 'utils/typography'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faCar, faDollarSign, faInfo, faPhone } from '@fortawesome/fontawesome-free-solid'
import { faInstagram } from '@fortawesome/fontawesome-free-solid'
import { faFacebookSquare } from '@fortawesome/fontawesome-free-solid'

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
  <footer className="footer">
    <section className="footerMain">
      <div>
        <div className="footerNav">
          <ul>
            <li>Ignite Driving</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">What We Offer</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <div className="footerContact">
          <ul className="footerContactChild">
            <li>Contact</li>
            <li><Link to="tel:+61434833131" itemprop="telephone">Phone: 0434 833 131</Link></li>
            <li><Link to="mailto:margaret@ignitedriving.com.au" itemprop="email">margaret@ignitedriving.com.au</Link></li>
          </ul>
          <ul className="footerSocials">
            <li><Link to="/"><FontAwesomeIcon icon={["fab","facebook"]}/></Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={["fab","instagram"]}/></Link></li>
          </ul>
        </div>
        <Link to="/" className="img_adta"><img src={adta} alt="ADTA Logo"/></Link>
        <Link to="/" className="img_k2d"><img src={k2d} alt="K2D Logo - coloured to match the ignite driving branding"/></Link>
      </div>
      <div className="footerInstagram">
        <p>Instagram</p>
      </div>
    </section>
    <section className="footerBottom">
      <div>
        <ul>
          <li><Link to="/">Privacy</Link></li>
          <li><Link to="/">Terms & Conditions</Link></li>
          <li><Link to="/">Sitemap</Link></li>
        </ul>
        <Link to="/">@ 2018 All Rights Reserved</Link>
        <Link to="/">Created by Luke Secomb Digital</Link>
      </div>
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
        {"src": "https://use.fontawesome.com/releases/v5.0.6/js/all.js", "type": "text/javascript"},
        {"src": "https://fonts.googleapis.com/css?family=Raleway:500,600", "type": "text/stylesheet"}
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper