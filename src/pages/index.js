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
        <h1>WEBSITE LAUNCH SPECIAL</h1>
        <h4>New Student Offer</h4>
        <h2>$10 off your first lesson with code "LAUNCH"</h2>
        <a className="bookNowNav" href="https://www.bookitlive.net/ignite_driving_isabella-plains" target="_blank" rel="noopener noreferrer">Book my first lesson</a>
        <p>T&C's apply</p>
      </section>
    </header>

    <section className="indexAbout">
      <h3>Based in South Canberra, Ignite Driving aims to help Learner drivers transition to confident and safe P plate drivers using thorough and informative teaching techniques</h3>
    </section> 

    <section className="whatWeOffer">
      <section>
        <div>
          <div>
            <div>
              <h2>First<br></br>Lesson</h2>
            </div>
            <FontAwesomeIcon icon={faPencilAlt}/>
          </div>
          <p>We talk about where you are at in your driving and work out where to go from there. <br></br><br></br> We will cover at least competency 1, depending on driving experience.  Includes an intro to the Keys 2 Drive program.</p>
          <Link to="/whatweoffer?key=initial_lesson">More Info</Link>
        </div>

        <div>
          <div>
            <div>
              <h2>Log<br></br>Book</h2>
            </div>
            <FontAwesomeIcon icon={faBook}/>
          </div>
          <p>Ignite Driving Instructors are ACT qualified to undertake Log Book assessments and issue P Licences.  <br></br>Early lessons are focussed on instructing to help the learner gain as much experience as possible before beginning assessing.</p>
          <Link to={`/whatweoffer?key=log_book`}>More Info</Link>
        </div>

        <div>
          <div>
            <div>
              <h2>Refresher<br></br>Lesson</h2>
            </div>
            <FontAwesomeIcon icon={faSyncAlt}/>
          </div>
          <p>Great for building confidence if it’s been a while since you’ve driven or if you have your licence but not feeling as safe on the road as you would like.  Also good for Seniors who need a refresher lesson before the Government Assessment.</p>
          <Link to="/whatweoffer?key=refresher">More Info</Link>
        </div>

        <div>
          <div>
            <div>
              <h2>Keys 2<br></br>Drive</h2>
            </div>
            <FontAwesomeIcon icon={faKey}/>
          </div>
          <p>A Federally funded FREE lesson with the aim to give you good learning techniques for you and your supervising driver.  Supervising driver must be present for the duration of the lesson.  Register on Keys2Drive website before booking this lesson.</p>
          <Link to="/whatweoffer?key=keys2drive">Free Lesson</Link>
        </div>

        <div>
          <div>
            <div>
              <h2>Car<br></br>Hire</h2>
            </div>
            <FontAwesomeIcon icon={faCar}/>
          </div>
          <p>If you are ready to undertake the one off test but don’t have access to a car you are able to hire a car from Ignite Driving.  Rates are based on a regular per hour lesson.</p>
          <Link to="/whatweoffer?key=car_hire">More Info</Link>
        </div>
      </section>
    </section>

    <section className="googleReviews">
      <ReactSlick />
      <a href="https://goo.gl/Mqd2oZ">See All Reviews</a>
    </section>
  </section>
  
)

export default IndexPage 