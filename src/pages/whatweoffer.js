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
      description: 'intial lesson infoDuring your first lesson there is a small amount of paperwork to be filled in.  we discuss where you are at in your driving journey and talk about the Keys2Drive program.  If you are starting ACT Logbook the first lesson most likely will not involve driving as you will learn Competency 1, Vehicle Controls, and maybe Competency 2, Cabin Drill.',
      link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
      linkName: 'Book your initial lesson',
      image: initial
    },
    'log_book': {
      description: 'Ignite Driving believes that the more experience a learner can gain before assessing, the higher the probability of being stamped competent when assessing at the first attempt.  With this in mind the early lessons will concentrate on learning each competency, moving at the pace of the Learner.  Assessing will generally begin after teaching up to Competency 19, at the discretion of the instructor.',
      link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
      linkName: 'Book Now',
      image: logBook
    },
    'refresher': {
      description: 'Great for building confidence if it’s been a while since you’ve driven or if you have your licence but not feeling as safe on the road as you would like.  Also good for Seniors who need a refresher before the Government Assessment.',
      link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
      linkName: 'more info about log book',
      image: refresh
    },
    'keys2drive': {
      description: 'Ignite Driving is qualified to deliver the free Federal Government funded Keys2Drive lesson.  We recommend talking with your instructor to work out when would be the most beneficial time for the lesson to be undertaken.  Please see the Keys2Drive website for further information',
      link: 'https://www.keys2drive.com.au/',
      linkName: 'More Info',
      image: k2d
    },
    'car_hire': {
      description: 'extra info need here',
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
                    <ul>
                        <li onClick={ () => ( this.changeContent('initial_lesson'))}>
                          <div>
                            <FontAwesomeIcon icon={faPencilAlt}/>
                          </div>
                          <h2>Initial Lesson</h2>
                        </li>
                        <li onClick={ () => ( this.changeContent('log_book') ) }>
                          <div>
                            <FontAwesomeIcon icon={faBook}/>
                          </div>
                          <h2>Log Book</h2>
                        </li>
                        <li onClick={ () => ( this.changeContent('refresher') ) }>
                          <div>
                            <FontAwesomeIcon icon={faSyncAlt}/>
                          </div>
                          <h2>Refresher Lesson</h2>
                        </li>
                        <li onClick={ () => ( this.changeContent('keys2drive') ) }>
                          <div>
                            <FontAwesomeIcon icon={faKey}/>
                          </div>
                          <h2>Keys2Drive</h2>
                        </li>
                        <li onClick={ () => ( this.changeContent('car_hire') ) }>
                          <div>
                            <FontAwesomeIcon icon={faCar}/>
                          </div>
                          <h2>Car Hire</h2>
                        </li>
                    </ul>
                    <div className="content">
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