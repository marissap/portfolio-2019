import React from "react"

const Bio = () => {
  return (
    <div className="bio-div">
      <h2><span className="dashed-underline">Hello there, I'm Marissa.</span></h2>
      <p>I like breaking down complex problems and building from the ground-up to create human-centered systems and bring people together, on and offline.</p>
      <p>Currently working on video distribution at Twitch and studying computer science at uOttawa.</p>
      <ul className="social-links">
        <li className="social-link">
          <a href="https://github.com/marissap">↖︎github</a>
        </li>
        <li className="social-link">
            <a href="https://www.linkedin.com/in/marissaphul/">↖︎linkedin</a>
        </li>
        <li className="social-link">
            <a href="https://twitter.com/marisosx">↖︎twitter</a>
        </li>
      </ul>
    </div>
  )
}

export default Bio
