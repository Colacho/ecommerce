import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"

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
        <html className="h-screen"></html>
        <body className="h-screen"></body>
      </Helmet>

      <div className="flex flex-col h-screen">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main className="p-4 container mx-auto flex-grow">{children}</main>

        <div className="bg-purple-500">
          <footer className="p-4 container mx-auto">
            <h1>Aca va el footer</h1>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
