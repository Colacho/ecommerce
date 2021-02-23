import { Link, graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query logoQuery {
      imageSharp(fluid: { originalName: { eq: "logo.png" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <header className="border-b-2 border-purple-500 mb-2">
      <div className="container mx-auto flex justify-between items-end">
        <div className="p-4 w-24">
          <Link to="/" className="self-end">
            <p>eCommerce</p>
            {/* <Img fluid={data.imageSharp.fluid} /> */}
          </Link>
        </div>
        <div className="space-x-2 p-4">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="inline-block self-end" />
          </Link>
          <Link to="/search/">
            <FontAwesomeIcon
              icon={faSearch}
              className="inline-block self-end"
            />
          </Link>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="inline-block self-end"
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
