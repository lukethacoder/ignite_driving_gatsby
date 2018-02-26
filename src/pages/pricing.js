import React from 'react'
import Link from 'gatsby-link'

const Pricing = () => (
    <section className="pageContentTemplate">

        <header className="headerContainer">
            <section className="headerSection">
                <h1>Pricing</h1>
            </section>
        </header>

        <section className="priceGuide">
            <div className="priceGuideContainer">
                <div className="priceGuideRow">
                    <div>
                        <h2>Initial Lesson</h2>
                    </div>
                    <div>
                        <h3>1hr</h3>
                    </div>
                    <div>
                        <h4>$78</h4>
                    </div>
                    <div>
                        <a href="https://www.bookitlive.net/ignite_driving_isabella-plains" target="_blank" rel="noopener noreferrer">Book Now</a>
                    </div>
                </div>

                <div className="priceGuideRow">
                    <div>
                        <h2>Individual Lesson</h2>
                        <p>starts from $78</p>
                    </div>
                    <div>
                        <h3>1hr 1.5hr 2h</h3>
                    </div>
                    <div>
                        <h4>$78*</h4>
                    </div>
                    <div>
                        <a href={`${process.env.BOOK_URL}`} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </div>
                </div>

                <div className="priceGuideRow">
                    <div>
                        <h2>5x 1hr Lesson Package</h2>
                        <p>saves 5%</p>
                    </div>
                    <div>
                        <h3>1hr</h3>
                    </div>
                    <div>
                        <h4>$370</h4>
                    </div>
                    <div>
                        <a href={`${process.env.BOOK_URL}`} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </div>
                </div>

                <div className="priceGuideRow">
                    <div>
                        <h2>10x 1hr Lesson Package</h2>
                        <p>saves 10% / One Free Lesson</p>
                    </div>
                    <div>
                        <h3>1hr</h3>
                    </div>
                    <div>
                        <h4>$702</h4>
                    </div>
                    <div>
                        <a href={`${process.env.BOOK_URL}`} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </div>
                </div>

                <div className="priceGuideRow">
                    <div>
                        <h2>Car Hire for one off test</h2>
                        <p>make sure to book your <a href="link this to somewhere that actually exists">ACT Gov test</a> first</p>
                    </div>
                    <div>
                        <h3>2hr</h3>
                    </div>
                    <div>
                        <h4>$156</h4>
                    </div>
                    <div>
                        <a href={`${process.env.BOOK_URL}`} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </div>
                </div>

                <div className="priceGuideRow">
                    <div>
                        <h2>Keys2Drive Lesson</h2>
                        <p>recommended after your first lesson</p>
                    </div>
                    <div>
                        <h3>2hr</h3>
                    </div>
                    <div>
                        <h4>FREE*</h4>
                    </div>
                    <div>
                        <a href={`${process.env.BOOK_URL}`} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </div>
                </div>


            </div>
        </section>

    </section>
)

export default Pricing