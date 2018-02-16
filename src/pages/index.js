import React from 'react'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'

const IndexPage = () => (
  <section className="pageContent">

    <header className="headerContainer">
      <section className="headerSection">
        {/* <TypographyStyle typography={typography}>FEBRUARY SPECIAL</TypographyStyle> */}
        {/* <h1>FEBRUARY SPECIAL</h1> */}
        <h1>FEBRUARY SPECIAL</h1>
        <h2>$10 off your first lesson</h2>
        <Link to="https://www.bookitlive.net/ignite_driving_isabella-plains" target="_blank" rel="noopener noreferrer">Book my first lesson</Link>
        <p>T&C's apply</p>
      </section>
    </header>

    <section className="indexAbout">
      <h3>Based in Canberra ignite driving aims to help safely transition L plater drivers to confident and safe P plater drivers using thourrough and informative teaching technique</h3>
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
          <FontAwesomeIcon icon={faPencilAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">More Info</Link>
        </div>

        <div>
          <h2>Refresher Lesson</h2>
          <FontAwesomeIcon icon={faPencilAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">Book Lesson</Link>
        </div>

        <div>
          <h2>Keys 2 Drive</h2>
          <FontAwesomeIcon icon={faPencilAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">Free Lesson</Link>
        </div>

        <div>
          <h2>Car Hire</h2>
          <FontAwesomeIcon icon={faPencilAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer.js">Book a Car</Link>
        </div>
      </section>
    </section>

    <section className="googleReviews">
      
    </section>
  </section>
)



export default IndexPage
