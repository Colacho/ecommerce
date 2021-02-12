import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Search = ({ data }) => {
  const [item, setItem] = useState("")

  const handleChange = e => {
    setItem(e.target.value.toLowerCase())
  }

  const productList = data.allProductsJson.nodes
  const matched = productList.filter(i => i.name.toLowerCase().includes(item))
  console.log(matched)
  console.log(item)
  return (
    <Layout>
      <Helmet>
        <html className="h-screen"></html>
        <body className="h-screen"></body>
      </Helmet>
      <SEO title="Products" />
      <h1>Buscar</h1>
      <hr />
      <form>
        <input
          placeholder="buscar..."
          name="item"
          type="text"
          value={item}
          onChange={handleChange}
        />
      </form>
      <div>
        {item !== ""
          ? matched.map(product => (
              <div>
                <p>{product.name}</p>
              </div>
            ))
          : null}
      </div>
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
        price
        fragance
      }
    }
  }
`

export default Search
