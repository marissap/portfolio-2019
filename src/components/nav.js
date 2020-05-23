import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
                    <Link to="/blog">blog</Link>
                </li>
                <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                        <label style={{ cursor: `pointer`, opacity: 0.8 }}>
                        <input
                            style={{ display: `none` }}
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                            checked={theme === "dark"}
                        />
                        {theme === "dark" ? `☀️` : `🌙`}
                        </label>
                    )}
                </ThemeToggler>
            </ul>
        </nav>
    )
}

export default Nav