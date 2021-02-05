import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Helmet>
      <html className="h-screen"></html>
      <body className="h-screen"></body>
      <main className="h-screen"></main>
    </Helmet>
    <SEO title="Products" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
