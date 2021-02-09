import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [item, setItem] = useState("")

  const handleChange = e => {
    setItem(e.target.value)
  }

  return (
    <Layout>
      <Helmet>
        <html className="h-screen"></html>
        <body className="h-screen"></body>
        <main className="h-screen"></main>
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
      <h1>{item}</h1>
      <Link to="/">Volver a la pagina principal</Link>
    </Layout>
  )
}

export default SecondPage
