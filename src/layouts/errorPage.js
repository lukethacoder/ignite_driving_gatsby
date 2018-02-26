import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from "../assets/logo.svg"
import bgimg from "../assets/bgimg.jpg"
import adta from "../assets/adta.png"
import k2d from "../assets/k2d.png"
import { NavLink } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faCar, faDollarSign, faInfo, faPhone } from '@fortawesome/fontawesome-free-solid'
import { faInstagram } from '@fortawesome/fontawesome-free-solid'
import { faFacebookSquare } from '@fortawesome/fontawesome-free-solid'
import { faGoogle } from '@fortawesome/fontawesome-free-solid'

import "../assets/slick/slick.css";
import "../assets/slick/slick-theme.css";
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
          <NavLink to="/whatweoffer/" activeClassName="activeClassName"><FontAwesomeIcon icon={faCar}/>What We Offer</NavLink>
        </li>
        <li>
          <NavLink to="/pricing/" activeClassName="activeClassName"><FontAwesomeIcon icon={faDollarSign}/>Pricing</NavLink>
        </li>
        <li class="homeNavButton">
          <NavLink exact={true} to="/" activeClassName="activeClassName"><FontAwesomeIcon icon={faHome}/>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about/" activeClassName="activeClassName"><FontAwesomeIcon icon={faInfo}/>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact/" activeClassName="activeClassName"><FontAwesomeIcon icon={faPhone}/>Contact</NavLink>
        </li>
      </ul>
      <a className="bookNowNav" href="https://www.bookitlive.net/ignite_driving_isabella-plains" target="_blank" rel="noopener noreferrer">BOOK NOW</a>
    </section>
  </nav>
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
        {"src": "https://fonts.googleapis.com/css?family=Raleway:500,600", "type": "text/stylesheet"},
        {"src": "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css", "type": "text/stylesheet"},
        {"src": "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css", "type": "text/stylesheet"}
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