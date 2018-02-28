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
            <br></br><br></br>
            When Learners are issued with their P’s through Ignite Driving the supervising driver can be reassured that their new P plate driver is competent, confident and safe to be on the road.
            <br></br><br></br>
            Ignite Driving can also help prepare Learners for the one off ACT or NSW P Test.  Having some professional lessons can only be beneficial for Learners about to do the 1 off test.
            <br></br><br></br>
            Our Instructors meet industry standards by holding a minimum Certificate IV in Driving Instructing, WWVP Card ACT, are members of ADTA (Australian Driver Training Association), and are recognised with ACT Government to be authorised to conduct Log Book Assessments.  
            <br></br><br></br>
            Ignite Driving has current and up to date Public Liability and Public Indemnity insurances.

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
            <img src={team01} alt="team member number one" />
            <div className="teamMemberInfo">
              <h2>Margaret Secomb</h2>
              <h3>Automatic | Keys2Drive | South Canberra</h3>
              <p>
              Margaret has been an instructor for three years and has gained a solid reputation in South Canberra during that time.  She seeks to continually evolve her instructing so that students gets as much learning out of each lesson as they can.  Margaret is thorough in her instructing and assessing with her aim to produce safe drivers on our roads.  She likes seeing the smiles on her student’s faces when they learn the small things in a lesson which helps improve their driving experience.  “Seeing a new Learner progress from not knowing anything about the controls to being able to issue them their P’s is a very rewarding experience.  Knowing that I helped that process is one of the things I enjoy most about being a Driving Instructor”.              </p>
            </div>
          </div>

          {/* add all future employees here using the below template */}
          {/* <div className="teamMemberTwo">
            <img src={team02} alt="team member number one" />
            <div className="teamMemberInfo">
              <h2>Margaret Secomb</h2>
              <h3>Automatic | South Canberra</h3>
              <p>
                Based in South Canberra, Ignite Driving was created to provide thorough and safe driving skills to Learners of all levels.  We progress at the pace of the individual Learner which means we are unable to quote how many lessons it will take Learners to obtain their P’s. 
              </p>
            </div>
            
          </div> */}
          
        </div>
      </section>
    </section>

  </section>
)

export default About
