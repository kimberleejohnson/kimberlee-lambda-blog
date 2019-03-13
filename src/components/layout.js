import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
  <header style={{ marginBottom: `3rem` }}>
  <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
    <h3 style={{ display: `inline` }}>Kimberlee Johnson</h3>
  </Link>
  <ul style={{ color: 'black', listStyle: `none`, float: `right` }}>
    <ListLink to="/">About</ListLink>
    <ListLink to="/console-blog/">Console.blog</ListLink>
  </ul>
</header>
    {children}
  </div>
)