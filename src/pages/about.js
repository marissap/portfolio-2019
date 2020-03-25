import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const About = ({ location }) => {
  return (
    <Layout location={location}>
        <SEO title="About me" />
        <h3><span role="img" aria-label="Rocket">🚀</span> What I'm up to now</h3>
        <p>I'm heading to San Francisco to work at Twitch this summer but until then, I am...</p>
        <p>Reading: <a href="https://www.goodreads.com/book/show/41940285-user-friendly">User Friendly: How the Hidden Rules of Design Are Changing the Way We Live, Work, and Play</a></p>
        <p>Listening to: <a href="https://www.bonappetit.com/story/bon-appetit-foodcast">the Bon Appétit Foodcast</a></p>
        <p>Building: <a href="https://www.revalapp.com/">Reval</a> a real estate valuation and financial analysis tool (currently in Beta)</p>
        <h3><span role="img" aria-label="Handshake">🤝</span> Reach out</h3>
        <p>Let's chat, about literally anything, including your thoughts on Cristiano Ronaldo vs Lionel Messi. You can find me on <a href="https://twitter.com/marisosx">Twitter</a>, <a href="https://www.linkedin.com/in/marissaphul/">LinkedIn</a>, and <a href="https://github.com/marissap">Github</a>.</p>
        <h3><span role="img" aria-label="Woman">👩🏻‍💻</span> A little more about me</h3>
        <p>I used to be the news editor for my university's student newspaper</p>
        <p>I eat saag paneer at least twice a week</p>
        <p>I'm currently using <a href="https://github.com/Jaredk3nt/laserwave">Laserwave</a> as my vs code theme</p>
    </Layout>
  )
}

export default About

