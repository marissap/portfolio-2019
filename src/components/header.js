import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/nav"

const Header = () => {
  let header
  const data = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }          
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata

  header = (
    <h1
      style={{
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {author.name}
      </Link>
    </h1>
  )

  return (
    <div className="header-with-nav">
        <header>{header}</header>
        <Nav/>
    </div>
  )
}

export default Header
