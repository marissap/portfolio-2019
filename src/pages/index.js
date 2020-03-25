import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location} title="{siteTitle}">
      <SEO title="All posts" />
      <Bio />
      <Projects data={data}/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
          node {
            fields {
              slug
            }
            frontmatter {
                title
                date(formatString: "DD-MM-YYYY")
                description
            }
          }
      }
    }
  }
`
