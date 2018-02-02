import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from "../assets/logo.svg"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import './style.scss'
import './index.scss'



/* stateless function */
const Header = () => (
  <nav className="navbar">
    <section className="topNav">
      <ul className="navContact">
        <li><Link to="/">0434 833 131</Link></li>
        <li><Link to="/">margaret@ignitedriving.com.au</Link></li>
      </ul>
      <Link to="/"><img src={logo} className="logo_img" alt="Logo"/></Link>
    </section>

    <section className="bottomNav">
      <ul className="navMenuList">
        <li><FontAwesomeIcon icon={faCoffee}/><Link to="/WhatWeOffer/">What We Offer</Link></li>
        <li><Link to="/"><i class="fas fa-spinner fa-spin"></i>Pricing</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/WhatWeOffer/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <Link className="bookNowNav" to="/">BOOK NOW</Link>
    </section>
  </nav>
)

const Footer = () => (
  <footer>
    <p>hello</p>
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
