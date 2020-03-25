import React from "react"
import { Link } from "gatsby"

const Projects = ({ data }) => {
    const posts = data.allMarkdownRemark.edges

    return (
        <section>
            <div className='row'>
                <div className='column column-small'>
                    <div className="pink"></div>
                    <h2>Projects</h2>
                </div>
                <div className='column column-large'>
                    <p><a href="https://github.com/marissap/cli-cheatsheet">CLI Cheatsheet</a>: CLI that allows the user to save common CLI commands (gatsby develop, npm start, etc.) to a sqlite database. Commands are then accessible from the command-line. Instead of remembering dozens of comands you only have to know one.</p>
                    <p><a href="https://github.com/marissap/ANN/blob/master/ANN.ipynb">Artifical Neural Network</a>: Built a basic ANN from scratch using a sigmuid activation function, performing Batch Gradient Descent, and training on a BFGS Algorithm.</p>
                </div>
            </div>
            <div className='row'>
                <div className='column column-large column-work'>
                    <p>Incoming Software Engineer Intern - <a href="https://www.twitch.tv/p/en/about/">Twitch</a>, Video Infrastructure</p>
                    <p style={{ paddingBottom: 10, fontSize: 14, }}>May 2020 - August 2020</p>
                    <p>Software Engineer Intern - <a href="https://www.bankofcanada.ca/2019/08/expansion-of-term-repo-operations-for-balance-sheet-management-purposes/">Bank of Canada</a>, Financial Markets Department</p>
                    <p style={{ paddingBottom: 10, fontSize: 14, }}>January 2019 - August 2019</p>
                </div>
                <div className='column column-small'>
                    <div className="purple"></div>
                        <h2>Work</h2>
                </div>
            </div>
            <div className='row'>
                <div className='column column-small'>
                    <div className="blue"></div>
                    <h2>Writing</h2>
                </div>
                <div className='column column-large'>
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                        <article key={node.fields.slug}>
                            <header>
                                <p><Link to={node.fields.slug}>{title} - {node.frontmatter.date}</Link></p>
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
                </div>
            </div>
        </section>
    )
}

export default Projects
