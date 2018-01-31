import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from "../assets/logo.svg";

import './style.scss'
import './index.scss'



/* stateless function */
const Header = () => (
  <nav className="navbar">
    <ul>
      <Link to="/">0434 833 131</Link>
      <Link to="/">margaret@ignitedriving.com.au</Link>
    </ul>
    <img src={logo} className="logo_img" alt="Logo"/>
    <section>
      <ul className="navMenu">
        <li><Link to="/WhatWeOffer/">What We Offer</Link></li>
        <li><Link to="/">Pricing</Link></li>
        <li><Link to="/">Home button</Link></li>
        <li><Link to="/WhatWeOffer/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <Link to="/">BOOK NOW</Link>
    </section>
  </nav>
)

const Footer = () => (
  <footer>
    <h1>footer</h1>
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
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
