import React from 'react'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faCar, faDollarSign, faInfo, faPhone } from '@fortawesome/fontawesome-free-solid'
import { faInstagram } from '@fortawesome/fontawesome-free-solid'
import { faFacebookSquare } from '@fortawesome/fontawesome-free-solid'
import { faGoogle } from '@fortawesome/fontawesome-free-solid'

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
                            <a href="#">0434 833 131</a>
                            <a href="#">margaret@ignitedriving.com.au</a>
                            <ul>
                                <li><Link to="/"><FontAwesomeIcon icon={faInstagram}/></Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faFacebookSquare}/></Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faGoogle}/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <form action="https://formspree.io/llama.bro20@gmail.com" method="POST">
                        <div>
                            <div>
                                <label>Name</label>
                                <input className="contactFormName" type="text" name="name" placeholder="Name"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Email</label>
                                <input className="contactFormEmail" type="email" name="_replyto" placeholder="Email"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Message</label>
                                <textarea className="contactFormTextArea" name="message" placeholder="Your message"></textarea>
                            </div>
                        </div>
                        <input className="contactFormSubmit" type="submit" value="Send"/>
                        <input type="hidden" name="_next" value="/" />
                    </form>
                </div>
            </section>
        </section>

    </section>
)

export default Contact