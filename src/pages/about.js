import React from 'react'
import Link from 'gatsby-link'
import aboutImg from '../assets/car01.jpg'
import team01 from '../assets/team01.jpg'
import team02 from '../assets/team02.jpg'

const About = () => (
  <section className="pageContentTemplate">

    <header className="headerContainer">
      <section className="headerSection">
        <h1>About</h1>
      </section>
    </header>

    <section className="aboutContainer">
      <section className="aboutOptions">
        <div>
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <p>
          Based in South Canberra, Ignite Driving was created to provide thorough and safe driving skills to Learners of all levels.  We progress at the pace of the individual Learner which means we are unable to quote how many lessons it will take Learners to obtain their P’s.
          <br></br><br></br>When Learners are issued with their P’s through Ignite Driving the supervising driver can be reassured that their new P plate driver is competent, confident and safe to be on the road.
          <br></br><br></br>Ignite Driving can also help prepare Learners for the one off ACT P Test.  Having some professional lessons can only be beneficial for Learners about to do the 1 off test.
          </p>
        </div>
      </section>
    </section>

    <header className="headerContainer aboutHeaderContainer">
      <section className="headerSection">
        <h1>Meet the Team</h1>
      </section>
    </header>

    <section className="meetTheTeamContainer">
      <section>
        <div className="meetTheTeamGridContainer">
          <div className="teamMemberOne">
            <div className="teamMemberImg">
              <img src={team01} alt="team member number one" />
            </div>
            <div className="teamMemberInfo">
              <h2>Margaret Secomb</h2>
              <h3>Automatic | South Canberra</h3>
              <p>
                Based in South Canberra, Ignite Driving was created to provide thorough and safe driving skills to Learners of all levels.  We progress at the pace of the individual Learner which means we are unable to quote how many lessons it will take Learners to obtain their P’s. 
              </p>
            </div>
          </div>

          <div className="teamMemberTwo">
            <div className="teamMemberImg">
              <img src={team02} alt="team member number one" />
            </div>
            <div className="teamMemberInfo">
              <h2>Margaret Secomb</h2>
              <h3>Automatic | South Canberra</h3>
              <p>
                Based in South Canberra, Ignite Driving was created to provide thorough and safe driving skills to Learners of all levels.  We progress at the pace of the individual Learner which means we are unable to quote how many lessons it will take Learners to obtain their P’s. 
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </section>

  </section>
)

export default About
