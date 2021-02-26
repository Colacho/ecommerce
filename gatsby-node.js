exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  results.data.allProductsJson.edges.forEach(edge => {
    const product = edge.node
    createPage({
      path: `/product/${product.id}`,
      component: require.resolve("./src/pages/product.js"),
      context: {
        slug: product.name,
      },
    })
  })
}
