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
        <li><a href="&#x6d;&#x61;&#x69;&#108;&#x74;&#111;&#58;&#109;&#x61;&#x72;&#x67;&#x61;&#114;&#x65;&#116;&#x40;&#x69;&#x67;&#110;&#x69;&#116;&#101;&#100;&#x72;&#x69;&#118;&#x69;&#x6e;&#103;&#46;&#x63;&#111;&#109;&#x2e;&#x61;&#x75;">&#109;&#97;&#x72;&#x67;&#x61;&#114;&#101;&#x74;&#x40;&#x69;&#103;&#110;&#105;&#116;&#x65;&#x64;&#x72;&#105;&#x76;&#x69;&#x6e;&#x67;&#x2e;&#99;&#111;&#x6d;&#46;&#x61;&#117;</a></li>
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

const Footer = () => (
  <footer className="footer">
    <section className="footerMain">
      <div>
        <div className="footerNav">
          <ul>
            <li>Ignite Driving</li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/whatweoffer/">What We Offer</NavLink></li>
            <li><NavLink to="/">Pricing</NavLink></li>
            <li><NavLink to="/about/">About</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footerContact">
          <ul className="footerContactChild">
            <li>Contact</li>
            <li><a to="tel:+61434833131" itemprop="telephone">Phone: 0434 833 131</a></li>
            <li><a href="&#x6d;&#x61;&#x69;&#108;&#x74;&#111;&#58;&#109;&#x61;&#x72;&#x67;&#x61;&#114;&#x65;&#116;&#x40;&#x69;&#x67;&#110;&#x69;&#116;&#101;&#100;&#x72;&#x69;&#118;&#x69;&#x6e;&#103;&#46;&#x63;&#111;&#109;&#x2e;&#x61;&#x75;">&#109;&#97;&#x72;&#x67;&#x61;&#114;&#101;&#x74;&#x40;&#x69;&#103;&#110;&#105;&#116;&#x65;&#x64;&#x72;&#105;&#x76;&#x69;&#x6e;&#x67;&#x2e;&#99;&#111;&#x6d;&#46;&#x61;&#117;</a></li>
          </ul>
          <ul className="footerSocials">
            <li><a href={`${process.env.BOOK_URL}`}><FontAwesomeIcon icon={["fab","facebook"]}/></a></li>
            <li><a href="https://www.instagram.com/ignitedriving/"><FontAwesomeIcon icon={["fab","instagram"]}/></a></li>
          </ul>
        </div>
        <Link to="/" className="img_adta"><img src={adta} alt="ADTA Logo"/></Link>
        <Link to="/" className="img_k2d"><img src={k2d} alt="K2D Logo - coloured to match the ignite driving branding"/></Link>
      </div>
      <div className="footerInstagram">
        <div>
          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/03ce0f49cdeefe1dfd646f6bb0e1cb84/5B0E289D/t51.2885-15/e35/26068700_1976868225862136_7210256067047981056_n.jpg" alt="January all booked out but luckily the $10 off your first lesson offer has been extended through February "/></Link>
          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/d2b83ab921a16bf0637cec595b1ef997/5B03317F/t51.2885-15/e35/25038260_157651714858146_6247807750609305600_n.jpg" alt="Merry Christmas.  A bit of fun. Ignite Driving will help explain some of these gauges properly during your lessons."/></Link>
          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/ebe8d73a9bf455f8f43c635cd324afe9/5B13FE40/t51.2885-15/e35/25012892_2064962146959578_2431920923784249344_n.jpg" alt="Picked up the new business cards today.  Looking good thanks to @luke_secomb_digital .  He's the man for design!"/></Link>

          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/7cab58e54034086fe8b672efa6f2d229/5B207BA1/t51.2885-15/s1080x1080/e15/fr/24845373_178589426211839_217166543056797696_n.jpg" alt="Ignite Driving Logo"/></Link>
          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/7cab58e54034086fe8b672efa6f2d229/5B207BA1/t51.2885-15/s1080x1080/e15/fr/24845373_178589426211839_217166543056797696_n.jpg" alt="Ignite Driving Logo"/></Link>
          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/7cab58e54034086fe8b672efa6f2d229/5B207BA1/t51.2885-15/s1080x1080/e15/fr/24845373_178589426211839_217166543056797696_n.jpg" alt="Ignite Driving Logo"/></Link>

          {/* <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/7cab58e54034086fe8b672efa6f2d229/5B207BA1/t51.2885-15/s1080x1080/e15/fr/24845373_178589426211839_217166543056797696_n.jpg" alt="Ignite Driving Logo"/></Link>
          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/7cab58e54034086fe8b672efa6f2d229/5B207BA1/t51.2885-15/s1080x1080/e15/fr/24845373_178589426211839_217166543056797696_n.jpg" alt="Ignite Driving Logo"/></Link>
          <Link to="/"><img src="https://instagram.fcbr1-1.fna.fbcdn.net/vp/7cab58e54034086fe8b672efa6f2d229/5B207BA1/t51.2885-15/s1080x1080/e15/fr/24845373_178589426211839_217166543056797696_n.jpg" alt="Ignite Driving Logo"/></Link> */}
        </div>
        <Link to="/">See more on Instagram</Link>
      </div>
    </section>
    <section className="footerBottom">
      <div>
        <ul>
          <li><Link to="/">Privacy</Link></li>
          <li><Link to="/">T&C</Link></li>
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