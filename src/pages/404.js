import React from 'react'

import '../layouts/content.scss'

const NotFoundPage = () => (
  <section className="pageContentTemplate">

    <header className="headerContainer submissionPage">
      <section className="headerSection ">
        <h1>error 404</h1>
        <h2>page not found.</h2>
        <p>you must be lost, let me take you back home</p>
        <a href="/">Home</a>
      </section>
    </header>

  </section>
)

export default NotFoundPage
