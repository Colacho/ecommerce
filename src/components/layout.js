/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        {/* <html className="h-screen"></html> */}
        <body className="h-screen"></body>
        {/* <main className="h-screen"></main> */}
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div className="container mx-auto">
        <main className="p-4">{children}</main>
      </div>
      <div className="bg-purple-500">
        <footer className="p-4 container mx-auto">
          <h1>Aca va el footer</h1>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
