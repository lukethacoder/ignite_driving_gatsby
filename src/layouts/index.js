import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from "../assets/logo.svg"
import bgimg from "../assets/bgimg.jpg"
import adta from "../assets/adta.png"
import k2d from "../assets/k2d.png"
import { NavLink } from 'react-router-dom'

import instagram_06 from '../assets/insta/instagram_post_07.jpg'
import instagram_05 from '../assets/insta/instagram_post_06.jpg'
import instagram_04 from '../assets/insta/instagram_post_05.jpg'
import instagram_03 from '../assets/insta/instagram_post_04.jpg'
import instagram_02 from '../assets/insta/instagram_post_03.jpg'
import instagram_01 from '../assets/insta/instagram_post_02.jpg'

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
        <li><a href="tel:+61434833131">0434 833 131</a></li>
        <li><a href="&#x6d;&#x61;&#x69;&#108;&#x74;&#111;&#58;&#109;&#x61;&#x72;&#x67;&#x61;&#114;&#x65;&#116;&#x40;&#x69;&#x67;&#110;&#x69;&#116;&#101;&#100;&#x72;&#x69;&#118;&#x69;&#x6e;&#103;&#46;&#x63;&#111;&#109;&#x2e;&#x61;&#x75;">&#109;&#97;&#x72;&#x67;&#x61;&#114;&#101;&#x74;&#x40;&#x69;&#103;&#110;&#105;&#116;&#x65;&#x64;&#x72;&#105;&#x76;&#x69;&#x6e;&#x67;&#x2e;&#99;&#111;&#x6d;&#46;&#x61;&#117;</a></li>
        <li><a>Mon-Fri 8:00AM - 6:00PM</a></li>
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
      <a className="bookNowNav" href="https://www.bookitlive.net/ignite_driving_isabella-plains" target="_blank">BOOK NOW</a>
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
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/whatweoffer">What We Offer</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footerContact">
          <ul className="footerContactChild">
            <li>Contact</li>
            <li><a to="tel:+61434833131" itemprop="telephone">Phone: 0434 833 131</a></li>
            <li><a href="&#x6d;&#x61;&#x69;&#108;&#x74;&#111;&#58;&#109;&#x61;&#x72;&#x67;&#x61;&#114;&#x65;&#116;&#x40;&#x69;&#x67;&#110;&#x69;&#116;&#101;&#100;&#x72;&#x69;&#118;&#x69;&#x6e;&#103;&#46;&#x63;&#111;&#109;&#x2e;&#x61;&#x75;">&#109;&#97;&#x72;&#x67;&#x61;&#114;&#101;&#x74;&#x40;&#x69;&#103;&#110;&#105;&#116;&#x65;&#x64;&#x72;&#105;&#x76;&#x69;&#x6e;&#x67;&#x2e;&#99;&#111;&#x6d;&#46;&#x61;&#117;</a></li>
          </ul>
          <ul className="footerSocials">
            <li><a href="https://www.facebook.com/ignitedriving" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","facebook"]}/></a></li>
            <li><a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","instagram"]}/></a></li>
          </ul>
        </div>
        <a href="https://www.adta.com.au/"  target="_blank" className="img_adta"><img src={adta} alt="ADTA Logo"/></a>
        <a href="https://www.keys2drive.com.au/"  target="_blank" className="img_k2d"><img src={k2d} alt="K2D Logo - coloured to match the ignite driving branding"/></a>
      </div>
      <div className="footerInstagram">
        <div>
          <a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer"><img src={instagram_06} alt="January all booked out but luckily the $10 off your first lesson offer has been extended through February "/></a>
          <a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer"><img src={instagram_05} alt="Merry Christmas.  A bit of fun. Ignite Driving will help explain some of these gauges properly during your lessons."/></a>
          <a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer"><img src={instagram_04} alt="Picked up the new business cards today.  Looking good thanks to @luke_secomb_digital .  He's the man for design!"/></a>

          <a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer"><img src={instagram_03} alt="Instagram Post"/></a>
          <a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer"><img src={instagram_02} alt="Instagram Post"/></a>
          <a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer"><img src={instagram_01} alt="Instagram Post"/></a>
        </div>
        <a href="https://www.instagram.com/ignitedriving/">See more on Instagram</a>
      </div>
    </section>
    <section className="footerBottom">
      <div>
        <ul>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">T&C</a></li>
          <li><a href="/">Sitemap</a></li>
        </ul>
        <a href="/">@ 2018 All Rights Reserved</a>
        <a href="https://lukesecomb.digital/" target="_blank">Created by Luke Secomb Digital</a>
      </div>
    </section>
  </footer>
)


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ignite Driving | South Canberra Driving School"
      meta={[
        { name: 'description', content: 'Based in South Canberra, Ignite Driving aims to help Learner drivers transition to confident and safe P plate drivers using thorough and informative teaching techniques' },
        { name: 'keywords', content: 'Driving, Keys2Drive, South Canberra, Instructor, Learner, Driving Lessons, Help, Teach, Learn' },
        { property: 'og:title', content: 'Ignite Driving | South Canberra Driving School'},
        { property: 'og:description', content: 'Based in South Canberra, Ignite Driving aims to help Learner drivers transition to confident and safe P plate drivers using thorough and informative teaching techniques'},
        { property: 'og:url', content: 'ignitedriving.com.au'},
        { property: 'og:image', content: 'http://d33wubrfki0l68.cloudfront.net/6e0d672d0e0bd74654ea9867cd34324c9213a020/66160/static/bgimg.43ab0aac.jpg'}
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
    
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper