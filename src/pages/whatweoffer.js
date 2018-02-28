import React from 'react'
import Link from 'gatsby-link'

import initial from "../assets/car02.jpg"
import logBook from "../assets/image01.jpg"
import refresh from "../assets/car03.jpg"
import k2d from "../assets/car04.jpg"
import carHire from "../assets/car05.jpg"

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { faBook } from '@fortawesome/fontawesome-free-solid'
import { faSyncAlt } from '@fortawesome/fontawesome-free-solid'
import { faKey } from '@fortawesome/fontawesome-free-solid'
import { faCar } from '@fortawesome/fontawesome-free-solid'
import { faStar } from '@fortawesome/fontawesome-free-solid'

const content = {
    'initial_lesson': {
      description: 'During your first lesson there is a small amount of paperwork to be filled in.  We discuss where you are at in your driving journey and talk about the Keys2Drive program.  If you are starting ACT Logbook the first lesson most likely will not involve driving as you will learn Competency 1, Vehicle Controls, and maybe Competency 2, Cabin Drill.  If you have started Log Book your instructor will assess and check that you are up to the standard of what has already been stamped and work out a plan to move forward.',
      link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
      linkName: 'Book your First lesson',
      image: initial
    },
    'log_book': {
      description: 'Ignite Driving believes that the more experience a learner can gain before assessing, the higher the probability of being stamped competent when assessing at the first attempt.  With this in mind the early lessons will concentrate on learning each competency, moving at the pace of the Learner.  Assessing will generally begin after teaching up to Competency 19, at the discretion of the instructor.',
      link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
      linkName: 'Book Now',
      image: logBook
    },
    'refresher': {
      description: 'If it has been a while since you’ve been behind the wheel then having a Refresher Lesson is a great way to gain back some confidence on the road.  Also perfect for Seniors who are preparing for the Government Assessment to get some professional feedback.',
      link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
      linkName: 'more info about log book',
      image: refresh
    },
    'keys2drive': {
      description: 'Ignite Driving has the only female qualified K2D instructor South Side to deliver the free Federal Government funded Keys2Drive lesson.  We recommend talking with your instructor to work out when would be the most beneficial time for the lesson to be undertaken.  The Learner and Supervising Driver must be present for the duration of the lesson.  The lesson includes a chat for approximately 25 minutes and driving for the remainder of the time.  Registering on the Keys2Drive website is required to obtain the K2D code to enter when booking the lesson with Ignite Driving.  Please see the <a href="">Keys2Drive website</a> for further information and to register',
      link: 'https://www.keys2drive.com.au/',
      linkName: 'More Info',
      image: k2d
    },
    'car_hire': {
      description: 'So you’re ready to undertake your ACT Government one off test but don’t have access to a car?  Ignite Driving can hire out their cars for the one off test.  A two hour hire includes pick up, duration of the test and associated paper work on passing, and return to pick up address.  Shorter hire periods are available with the meeting point at Access Canberra.  Minimum hire time is 1 hour.  Contact Ignite Driving to discuss.',
      link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
      linkName: 'Book Now',
      image: carHire
    }
}

export default class Content extends React.Component {
    constructor() {
        super();

        this.state = {
            content: 'initial_lesson'
        }

        this.changeContent = this.changeContent.bind(this)
    }

    changeContent(key) {
        this.setState({
            content: key
        })
    }

    render() {
        return(
            <section className="pageContentTemplate">

              <header className="headerContainer">
                <section className="headerSection">
                  <h1>What We Offer</h1>
                </section>
              </header>

              <section className="whatWeOfferTemplate">
                <section className="whatWeOfferOptions">
                  <div>
                    <ul className="whatWeOfferOptionsUl">
                        <li className="whatWeOfferOptionsLi" onClick={ () => ( this.changeContent('initial_lesson'))}>
                          <div>
                            <FontAwesomeIcon icon={faPencilAlt}/>
                          </div>
                          <h2>First Lesson</h2>
                        </li>
                        <li className="whatWeOfferOptionsLi" onClick={ () => ( this.changeContent('log_book') ) }>
                          <div>
                            <FontAwesomeIcon icon={faBook}/>
                          </div>
                          <h2>Log Book</h2>
                        </li>
                        <li className="whatWeOfferOptionsLi" onClick={ () => ( this.changeContent('refresher') ) }>
                          <div>
                            <FontAwesomeIcon icon={faSyncAlt}/>
                          </div>
                          <h2>Refresher Lesson</h2>
                        </li>
                        <li className="whatWeOfferOptionsLi" onClick={ () => ( this.changeContent('keys2drive') ) }>
                          <div>
                            <FontAwesomeIcon icon={faKey}/>
                          </div>
                          <h2>Keys2Drive</h2>
                        </li>
                        <li className="whatWeOfferOptionsLi" onClick={ () => ( this.changeContent('car_hire') ) }>
                          <div>
                            <FontAwesomeIcon icon={faCar}/>
                          </div>
                          <h2>Car Hire</h2>
                        </li>
                    </ul>
                    <div className="whatWeOfferContent">
                      <div>
                        <img src={content[this.state.content].image} />
                      </div>
                      <p>{ content[this.state.content].description }</p>
                      <div className="wwoBtnDiv">
                        <a href={content[this.state.content].link}>{content[this.state.content].linkName}</a>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>
        )
    }
}