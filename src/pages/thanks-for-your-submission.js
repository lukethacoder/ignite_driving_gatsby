import React from 'react'
import Link from 'gatsby-link'

const tfys = () => (
    <section className="pageContentTemplate">

        <header className="headerContainer">
            <section className="headerSection">
                <h1>Thank you for your submission</h1>
            </section>
        </header>

        <section className="contactPage">
            <section>
                <div>
                    <form action="https://formspree.io/llama.bro20@gmail.com"
                        method="POST">
                        <input type="text" name="name"/>
                        <input type="email" name="_replyto"/>
                        <input type="hidden" name="_subject" value="New submission!"/>
                        <input type="submit" value="Send"/>
                    </form>
                    <input type="hidden" name="_next" value="//site.io/thanks.html" />
                </div>
            </section>
        </section>

    </section>
)

export default tfys