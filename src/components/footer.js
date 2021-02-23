import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faCamera, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query logoFooter {
      imageSharp(fluid: { originalName: { eq: "logo.png" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <div className="bg-purple-500">
      <footer className="p-4 container mx-auto flex justify-between">
        <div className="p-4 w-24">
          <Link to="/" className="">
            <p>eCommerce</p>
            {/* <Img fluid={data.imageSharp.fluid} /> */}
          </Link>
        </div>
        <div className="flex flex-col items-end">
          <Link>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faCamera} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
