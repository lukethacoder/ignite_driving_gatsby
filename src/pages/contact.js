import React from 'react'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/fontawesome-free-solid'
// import { faFacebookSquare } from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-solid'

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
                            <a href="mailto:margaret@ignitedriving.com.au?subject=Direct Email Enquiry">margaret@ignitedriving.com.au</a>
                            <ul>
                                <li><a href={`${process.env.INSTA_URL}`} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={["fab", "instagram"]}/>
                                    </a>
                                </li>
                                <li><a href={`${process.env.FB_URL}`} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={["fab", "facebook"]}/>
                                    </a>
                                </li>
                                <li><a href={`${process.env.GOOGLE_URL}`} target="_blank" rel="noopener noreferrer">
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