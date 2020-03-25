import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Work = ({ location }) => {
  return (
    <Layout location={location}>
        <p>This page is currently a work in progress. In the (near) future it will hold a list of my internships and my notes on how I contributed and what I learned.</p>
        <SEO title="Work experience" />
    </Layout>
  )
}

export default Work

