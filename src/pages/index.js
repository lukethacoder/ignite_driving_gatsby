import React from 'react'
import Link from 'gatsby-link'

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

    </section>

    <section className="googleReviews">
    
    </section>
  </section>
)



export default IndexPage
