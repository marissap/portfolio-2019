import React from "react"
import { Link } from "gatsby"
import Box from "../components/box"

const Projects = ({ data }) => {
    const posts = data.allMarkdownRemark.edges

    return (
        <section>
            <h2><span className="dashed-underline">Projects</span></h2>
            <p className="project"><a href="https://github.com/marissap/cli-cheatsheet">CLI Cheatsheet</a>: CLI that allows the user to save common CLI commands (gatsby develop, npm start, etc.) to a sqlite database. Commands are then accessible from the command-line. Instead of remembering dozens of comands you only have to know one.</p>
            <p className="project"><a href="https://github.com/marissap/ANN/blob/master/ANN.ipynb">Artifical Neural Network</a>: Built a basic ANN from scratch using a sigmuid activation function, performing Batch Gradient Descent, and training on a BFGS Algorithm.</p>             
            <h2><span className="dashed-underline">Writing</span></h2>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                <article key={node.fields.slug}>
                    <header>
                        <p><Link to={node.fields.slug}>{title}</Link></p>
                        <p style={{ fontSize: "smaller" }}>{node.frontmatter.date}</p>
                    </header>
                </article>
                )
            })}
        </section>
    )
}

export default Projects
