import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery( graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }` 
  )

  const { title } = data.site.siteMetadata  

  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="https://www.reece.com/register">Register</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/test">Appointment</Link>
        <Link to="/search">Search</Link>
        <Link to="/login">login</Link>
      </div>
    </nav>
  )
}
