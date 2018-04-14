import React from 'react'
import Link from 'gatsby-link'
import Slider from "react-slick"

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

class ReviewsSlick extends React.Component{
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
            <h2>Toby BLEYS</h2>
            <h3>1 week ago</h3>
            <div>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <p>Probably the best driving school I have heard of from anyone. Margaret is the most lovely and friendly person I know. She put up with my somewhat boisterous attitude throughout and made me into a wonderful driver. After completing the log book with Margaret, I feel confident in my ability to do everything that is required by the 23 competencies. Even afterwards, when the auditors hadn’t signed off properly, she was still really kind and helpful to me trying to work out what I needed to do. So thank you Ignite Driving and thank you Margaret for being so kind and supportive to me while I was learning to drive.
            </p>
          </div>
          <div>
            <h2>A C</h2>
            <h3>2 monthss ago</h3>
            <div>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <p>Thankyou Ignite driving. I now have a very confident and capable P plater. Thanks for you encourgement and support, I highly recomend Margaret from Ignite drivine.
            </p>
          </div>

          <div>
            <h2>Rod McGuirk</h2>
            <h3>2 months ago</h3>
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
            <h3>3 months ago</h3>
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
            <h3>3 months ago</h3>
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

export default ReviewsSlick 