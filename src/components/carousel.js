import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons"

// ****** images must be in src/images/carousel-image ******
const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0)

  const data = useStaticQuery(graphql`
    query carouselQuery {
      allFile(filter: { relativeDirectory: { eq: "carousel-image" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const length = images.length
  const leftarrow = () => {
    setImgIndex(imgIndex === 0 ? length - 1 : imgIndex - 1)
  }
  const rigtharrow = () => {
    setImgIndex(imgIndex < length - 1 ? imgIndex + 1 : 0)
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          onClick={leftarrow}
          className="text-7xl w-1/5 self-center p-4 cursor-pointer"
        />

        <div className="w-2/5 content-center">
          {images.map((image, index) => {
            if (index === imgIndex) {
              return <Img fluid={image.childImageSharp.fluid} key={image.id} />
            }
            return null
          })}
        </div>

        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          onClick={rigtharrow}
          className="text-7xl w-1/5 self-center p-4 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Carousel
