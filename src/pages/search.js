import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SearchBar from "../components/searchBar"
const Search = ({ data }) => {
  const productList = data.allProductsJson.nodes

  return (
    <Layout>
      <Helmet>
        <html className="h-screen"></html>
        <body className="h-screen"></body>
      </Helmet>
      <SEO title="Products" />
      <h1>Buscar</h1>

      <SearchBar products={productList} />

      <Link to="/">Volver a la pagina principal</Link>
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery {
    allProductsJson {
      nodes {
        id
        type
        name
        brand
        price
        tag
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Search
