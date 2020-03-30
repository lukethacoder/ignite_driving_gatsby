import React from 'react';
import Link from 'gatsby-link';

import initial from '../assets/car02.jpg';
import logBook from '../assets/image01.jpg';
import refresh from '../assets/car03.jpg';
import k2d from '../assets/k2d.png';
import carHire from '../assets/car05.jpg';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid';
import { faBook } from '@fortawesome/fontawesome-free-solid';
import { faSyncAlt } from '@fortawesome/fontawesome-free-solid';
import { faKey } from '@fortawesome/fontawesome-free-solid';
import { faCar } from '@fortawesome/fontawesome-free-solid';
import { faStar } from '@fortawesome/fontawesome-free-solid';

const content = {
  initial_lesson: {
    description:
      'During your first lesson there is a small amount of paperwork to be filled in.  We discuss where you are at in your driving journey and talk about the Keys2Drive program.  If you are starting ACT Logbook the first lesson most likely will not involve driving as you will learn Competency 1, Vehicle Controls, and maybe Competency 2, Cabin Drill.  If you have started Log Book your instructor will assess and check that you are up to the standard of what has already been stamped and work out a plan to move forward.',
    link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
    linkName: 'Book your First lesson',
    image: initial,
  },
  log_book: {
    description:
      'Ignite Driving believes that the more experience a learner can gain before assessing, the higher the probability of being stamped competent when assessing at the first attempt.  With this in mind the early lessons will concentrate on learning each competency, moving at the pace of the Learner.  Assessing will generally begin after teaching up to Competency 19, at the discretion of the instructor.',
    link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
    linkName: 'Book Now',
    image: logBook,
  },
  refresher: {
    description:
      'If it has been a while since you’ve been behind the wheel then having a Refresher Lesson is a great way to gain back some confidence on the road.  Also perfect for Seniors who are preparing for the Government Assessment to get some professional feedback.',
    link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
    linkName: 'Book Now',
    image: refresh,
  },
  keys2drive: {
    description:
      'Ignite Driving has the only female qualified K2D instructor in South Canberra to deliver the free Federal Government funded Keys2Drive lesson.  We recommend talking with your instructor to work out when would be the most beneficial time for the lesson to be undertaken.  The Learner and Supervising Driver must be present for the duration of the lesson.  The lesson includes a chat for approximately 25 minutes and driving for the remainder of the time.  Registering on the Keys2Drive website is required to obtain the K2D code to enter when booking the lesson with Ignite Driving.  Please see the Keys2Drive website for further information and to register.',
    link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
    linkName: 'Book Now',
    image: k2d,
  },
  car_hire: {
    description:
      'So you’re ready to undertake your ACT Government one off test but don’t have access to a car?  Ignite Driving can hire out their cars for the one off test.  A two hour hire includes pick up, duration of the test and associated paper work on passing, and return to pick up address.  Shorter hire periods are available with the meeting point at Access Canberra, Tuggeranong.  Minimum hire time is 1 hour.  Contact Ignite Driving to discuss.',
    link: 'https://www.bookitlive.net/ignite_driving_isabella-plains',
    linkName: 'Book Now',
    image: carHire,
  },
};

const select = [
  {
    name: 'First Lesson',
    key: 'initial_lesson',
    icon: faPencilAlt,
    selectURL: 'initial_lesson',
    className: 'selectInitialLesson',
  },
  {
    name: 'Ongoing Lesson',
    key: 'log_book',
    icon: faBook,
    selectURL: 'log_book',
    className: `selectLogBook`,
  },
  {
    name: 'Refresher Lesson',
    key: 'refresher',
    icon: faSyncAlt,
    selectURL: 'refresher',
    className: `selectRefresher`,
  },
  {
    name: 'Keys 2 Drive',
    key: 'keys2drive',
    icon: faKey,
    selectURL: 'keys2drive',
    className: `selectKeys2Drive`,
  },
  {
    name: 'Car Hire',
    key: 'car_hire',
    icon: faCar,
    selectURL: 'car_hire',
    className: `selectCarHire`,
  },
];

export default class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      content: 'initial_lesson',
    };

    this.changeContent = this.changeContent.bind(this);
  }

  componentDidMount(key) {
    // Get the key value in the url
    var urlLocation = window.location.href.split('=')[1];

    // If the key varaible is not undefined (There is ?key=something in the URL)
    if (typeof urlLocation !== 'undefined') {
      // If the content has a key of the urlLocation (eg initial_lesson etc)
      if (content.hasOwnProperty(urlLocation)) {
        // Set the state
        this.setState({
          content: urlLocation,
        });
      }
    }
    // If none of this happens then it will use the default state in the constructor function
  }

  changeContent(key) {
    this.setState({
      content: key,
    });
  }

  render() {
    return (
      <section className="pageContentTemplate">
        <header className="headerContainer whatWeOfferHeader">
          <section className="headerSection">
            <h1>What We Offer</h1>
          </section>
        </header>

        <section className="whatWeOfferTemplate">
          <section className="whatWeOfferOptions">
            <div>
              <ul className="whatWeOfferOptionsList">
                {select.map((select, index) => {
                  return (
                    <li
                      className={`${select.className} ${
                        this.state.content === select.key ? 'active' : ''
                      }`}
                      onClick={() => this.changeContent(select.selectURL)}
                    >
                      <FontAwesomeIcon icon={select.icon} />
                      <div>
                        <h2>{select.name}</h2>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="whatWeOfferContent">
                <div></div>
                {this.state.content === 'keys2drive' ? (
                  <p style={{ fontWeight: 700 }}>
                    Due to the Corona Virus pandemic Ignite Driving is unable to
                    deliver the free Keys2Drive Lesson until further notice.
                  </p>
                ) : null}
                <p>{content[this.state.content].description}</p>
                <div className="wwoBtnDiv">
                  {/* <img src={content[this.state.content].image} /> */}
                  <a href={content[this.state.content].link}>
                    {content[this.state.content].linkName}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
