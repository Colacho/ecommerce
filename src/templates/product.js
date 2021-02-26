import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const Product = ({ data }) => {
  const product = data.productsJson
  return (
    <Layout>
      <h1>{product.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.name }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    productsJson(name: { eq: $slug }) {
      name
    }
  }
`
export default Product
