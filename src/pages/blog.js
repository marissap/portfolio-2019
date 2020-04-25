import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AllPosts = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <p>I take notes. While I'm reading after I've spoken to somebody when ideas pop into my head while walking. I like to document these, not always into nicely formatted blog posts, sometimes just a few lines. As of right now, I've got 2423 sitting in my notes app, this is where I'll publish the ones I'm brave enough to share. Topics range from programming and theoretical computer science to governance and economics and even to book reviews and mundane observations. I'm not saying they're good, that's for you to decide.</p>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <p>{node.frontmatter.date}</p>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
