import React from "react"
import { Link } from "gatsby"

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li className="nav-link">
                    <Link to="/about">about</Link>
                </li>
                <li className="nav-link">
                    <Link to="/projects">projects</Link>
                </li>
                <li className="nav-link">
                    <Link to="/work">work</Link>
                </li>
                <li className="nav-link">
                    <Link to="/blog">blog</Link>
                </li> 
            </ul>
        </nav>
    )
}

export default Nav