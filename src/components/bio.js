import React from "react"
import { Link } from "gatsby"

const Bio = () => {
  return (
    <div className="bio-div">
      <h2><span className="dashed-underline">Hello there, I'm Marissa.</span></h2>
      <p>I like breaking down complex problems and building from the ground-up to create human-centered systems and bring people together, on and offline.</p>
      <p>Currently working on video distribution at Twitch and studying computer science at uOttawa.</p>
      <ul className="social-links">
        <li className="social-link">
          <Link to="/about">↖︎github</Link>
        </li>
        <li className="social-link">
            <Link to="/projects">↖︎linkedin</Link>
        </li>
        <li className="social-link">
            <Link to="/work">↖︎twitter</Link>
        </li>
      </ul>
    </div>
  )
}

export default Bio
