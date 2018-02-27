import React from 'react'
import Link from 'gatsby-link'
import Slider from "react-slick"

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { faBook } from '@fortawesome/fontawesome-free-solid'
import { faSyncAlt } from '@fortawesome/fontawesome-free-solid'
import { faKey } from '@fortawesome/fontawesome-free-solid'
import { faCar } from '@fortawesome/fontawesome-free-solid'
import { faStar } from '@fortawesome/fontawesome-free-solid'

import bgimg from "../assets/bgimg.jpg"

class ReactSlick extends React.Component{
  render() {
    var settings = {
      dots: true,
      swipe: true,
      autoplay: false
    }
    return (
      <div className='sliderContainer'>
        <Slider {...settings}>
          <div>
            <h2>Rod McGuirk</h2>
            <h3>3 weeks ago</h3>
            <div>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <p>Margaret is a cheerful and unflappable instructor. She's a thorough, conscientious and meticulous teacher who instills confidence in the student and parents. From my experience, she doesn't rush a student through the process, not does she unnecessarily prolong it. I wouldn't hesitate in recommending her to any parent who isn't looking for shortcuts but wants confidence that a child has the adequate skills needed for a P-plate.
            </p>
          </div>

          <div>
            <h2>Emma Browne</h2>
            <h3>1 month ago</h3>
            <div>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <p>Margret is an amazing instructor and all around lovely person too! I really enjoyed her approach to both teaching and assessment. I've definitely gained so much more confidence in the car and feel really comfortable with all aspects of my driving. She explains things really well and gives great feedback!
            </p>
          </div>

          <div>
            <h2>Anna Garretson</h2>
            <h3>1 month ago</h3>
            <div>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <p>Highly recommend Margaret Secomb as a driving instructor. I decided to book lessons with her after getting my third Learner’s license (having let my previous ones expire after a handful of lessons with family members). I was in my 30’s by this time and very nervous about driving, but Margaret proved a calm, supportive and effective teacher. She was thorough in her instruction and assessment, which is exactly what I wanted: my priority was to become a good, safe driver, rather than rush through the competencies. After all my false starts it was great to finally get my P’s in 2017. Nearly six months on, I feel confident on the road and am enjoying my newfound freedom!
            </p>
          </div>
          
        </Slider>
      </div>
    );
  }
}

const IndexPage = () => (
  <section className="pageContent">

    <header className="headerContainer">
      <section className="headerSection">
        <h1>FEBRUARY SPECIAL</h1>
        <h2>$10 off your first lesson</h2>
        <a className="bookNowNav" href="https://www.bookitlive.net/ignite_driving_isabella-plains" target="_blank" rel="noopener noreferrer">Book my first lesson</a>
        <p>T&C's apply</p>
      </section>
    </header>

    <section className="indexAbout">
      <h3>Based in Canberra Ignite Driving aims to help safely transition L plater drivers to confident and safe P plater drivers using thourrough and informative teaching technique</h3>
    </section> 

    <section className="whatWeOffer">
      <section>
        <div>
          <div>
            <h2>Initial Lesson</h2>
          </div>
          <FontAwesomeIcon icon={faPencilAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer/">Initial Lesson</Link>
        </div>

        <div>
          <div>
            <h2>Log Book</h2>
          </div>
          <FontAwesomeIcon icon={faBook}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer/">More Info</Link>
        </div>

        <div>
          <div>
            <h2>Refresher Lesson</h2>
          </div>
          <FontAwesomeIcon icon={faSyncAlt}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer/">Book Lesson</Link>
        </div>

        <div>
          <div>
            <h2>Keys 2 Drive</h2>
          </div>
          <FontAwesomeIcon icon={faKey}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer/">Free Lesson</Link>
        </div>

        <div>
          <div>
            <h2>Car Hire</h2>
          </div>
          <FontAwesomeIcon icon={faCar}/>
          <p>Short paragraph about the initial lesson and stuff 4 lines should be g. Guess we can always make the font smaller but want them all similar</p>
          <Link to="/whatweoffer/">Book a Car</Link>
        </div>
      </section>
    </section>

    <section className="googleReviews">
      <ReactSlick />
      <a href="https://google.com.au">See All Reviews</a>
    </section>
  </section>
  
)

export default IndexPage 