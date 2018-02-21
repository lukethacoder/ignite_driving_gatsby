import React from 'react'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { faBook } from '@fortawesome/fontawesome-free-solid'
import { faSyncAlt } from '@fortawesome/fontawesome-free-solid'
import { faKey } from '@fortawesome/fontawesome-free-solid'
import { faCar } from '@fortawesome/fontawesome-free-solid'
import { faStar } from '@fortawesome/fontawesome-free-solid'


const WhatWeOffer = () => (
  <section className="pageContentTemplate">

    <header className="headerContainer">
      <section className="headerSection">
        <h1>What We Offer</h1>
      </section>
    </header>

    <section className="whatWeOfferTemplate">
      <section className="whatWeOfferOptions">
        <div>
          <h2>Initial Lesson</h2>
          <FontAwesomeIcon icon={faPencilAlt}/>
        </div>

        <div>
          <h2>Log Book</h2>
          <FontAwesomeIcon icon={faBook}/>
        </div>

        <div>
          <h2>Refresher Lesson</h2>
          <FontAwesomeIcon icon={faSyncAlt}/>
        </div>

        <div>
          <h2>Keys 2 Drive</h2>
          <FontAwesomeIcon icon={faKey}/>
        </div>

        <div>
          <h2>Car Hire</h2>
          <FontAwesomeIcon icon={faCar}/>
        </div>
      </section>
    </section>

  </section>
)

export default WhatWeOffer
