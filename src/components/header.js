import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/nav"
import { scale } from "../utils/typography"


const Header = ({ location }) => {
  console.log(location)
  const rootPath = `${__PATH_PREFIX__}/`
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

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: 0,
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
  } else {
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
  }
  return (
    <div style={{
        width: `100%`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `baseline`,
    }}>
        <header>{header}</header>
        <Nav/>
    </div>
  )
}

export default Header
