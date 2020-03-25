import React from "react"
import Header from "../components/header"

import { rhythm } from "../utils/typography"

const Layout = ({ location, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header location={location}/>
      <main>{children}</main>
      <footer style={{ paddingTop: `40px`, }}>
        <p style={{ fontSize: `12px` }}>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> by Marissa Phul
        </p>
      </footer>
    </div>
  )
}

export default Layout
