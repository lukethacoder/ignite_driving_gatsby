import React from 'react'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { faBook } from '@fortawesome/fontawesome-free-solid'
import { faSyncAlt } from '@fortawesome/fontawesome-free-solid'
import { faKey } from '@fortawesome/fontawesome-free-solid'
import { faCar } from '@fortawesome/fontawesome-free-solid'
import { faStar } from '@fortawesome/fontawesome-free-solid'

import bgimg from "../assets/bgimg.jpg"

const IndexPage = () => (
  <section className="pageContent">

    <header className="headerContainer">
      <section className="headerSection">
        <h1>FEBRUARY SPECIAL</h1>
        <h2>$10 off your first lesson</h2>
        <a className="bookNowNav" href={`${process.env.BOOK_URL}`} target="_blank" rel="noopener noreferrer">Book my first lesson</a>
        <p>TandC's apply</p>
      </section>
    </header>

    <section className="indexAbout">
      <h3>Based in Canberra Ignite Driving aims to help safely transition L plater drivers to confident and safe P plater drivers using thourrough and informative teaching technique</h3>
    </section> 

    <section className="whatWeOffer">
      <section>
        <div>
          <h2>Initial Lesson</h2>
          <FontAwesomeIcon icon={faPencilAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">Initial Lesson</Link>
        </div>

        <div>
          <h2>Log Book</h2>
          <FontAwesomeIcon icon={faBook}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">More Info</Link>
        </div>

        <div>
          <h2>Refresher Lesson</h2>
          <FontAwesomeIcon icon={faSyncAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">Book Lesson</Link>
        </div>

        <div>
          <h2>Keys 2 Drive</h2>
          <FontAwesomeIcon icon={faKey}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">Free Lesson</Link>
        </div>

        <div>
          <h2>Car Hire</h2>
          <FontAwesomeIcon icon={faCar}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">Book a Car</Link>
        </div>
      </section>
    </section>

    <section className="googleReviews">
      <div className="sliderWrapper">
        <div>your content</div>
        <div>your content</div>
        <div>your content</div>
      </div>
    </section>
  </section>
  
)

export default IndexPage