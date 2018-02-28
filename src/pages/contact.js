import React from 'react'
import Link from 'gatsby-link'
import Slider from "react-slick"

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'
// import { faInstagram } from '@fortawesome/fontawesome-free-solid'
// import { faFacebookSquare } from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-solid'

class ReactSlickContact extends React.Component{
    render() {
      var settings = {
        dots: true,
        swipe: true,
        autoplay: true
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

const Contact = () => (
    <section className="pageContentTemplate">

        <header className="headerContainer">
            <section className="headerSection">
                <h1>Contact</h1>
            </section>
        </header>

        <section className="contactContainer">
            <section>
                <div>
                    <div className="contactIntro">
                        <p>Questions, enquiries, or comments are always welcome – we would love to hear from you!
                        </p>
                        <div>
                            <a href="tel:+61434833131">0434 833 131</a>
                            <a href="&#x6d;&#x61;&#x69;&#108;&#x74;&#111;&#58;&#109;&#x61;&#x72;&#x67;&#x61;&#114;&#x65;&#116;&#x40;&#x69;&#x67;&#110;&#x69;&#116;&#101;&#100;&#x72;&#x69;&#118;&#x69;&#x6e;&#103;&#46;&#x63;&#111;&#109;&#x2e;&#x61;&#x75;">&#109;&#97;&#x72;&#x67;&#x61;&#114;&#101;&#x74;&#x40;&#x69;&#103;&#110;&#105;&#116;&#x65;&#x64;&#x72;&#105;&#x76;&#x69;&#x6e;&#x67;&#x2e;&#99;&#111;&#x6d;&#46;&#x61;&#117;</a>
                            <ul>
                                <li><a href="https://www.instagram.com/ignitedriving/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={["fab", "instagram"]}/>
                                    </a>
                                </li>
                                <li><a href="https://www.bookitlive.net/ignite_driving_isabella-plains" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={["fab", "facebook"]}/>
                                    </a>
                                </li>
                                <li><a href="https://www.google.com.au/search?q=ignite+driving&rlz=1C1CHBD_en-GBAU763AU763&oq=ignite+driving&aqs=chrome..69i57j69i60l5.3567j0j4&sourceid=chrome&ie=UTF-8#lrd=0x6b17cab1bf6cf9d1:0xba15a5a8f39f8b26,1,,," target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={["fab", "google"]}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form name="igniteDrivingContactForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks-for-your-submission/">
                        <input name="bot-field" className="olHoneyPot"/>
                        <div className="contactFormName">
                            <div>
                                <label className="formLabel">Name</label>
                                <input type="text" name="name" placeholder="Name" required/>
                            </div>
                        </div>
                        <div className="contactFormEmail">
                            <div>
                                <label>Email</label>
                                <input type="email" name="_replyto" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="contactFormTextArea">
                            <div>
                                <label>Message</label>
                                <textarea name="message" placeholder="Your message" required></textarea>
                            </div>
                        </div>
                        <div className="contactFormSubmit">
                            <div>
                                <button type="submit" value="Send">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </section>
        </section>

    </section>
)

export default Contact