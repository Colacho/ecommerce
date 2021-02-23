import React, { useState } from "react"
import Img from "gatsby-image"

const SearchBar = ({ products }) => {
  const [item, setItem] = useState("")
  const [criteria, setCriteria] = useState("")

  const handleChange = e => {
    setItem(e.target.value.toLowerCase())
  }
  const handleClick = e => {
    setCriteria(e.target.value)
  }
  const searchFilter = filtred => {
    return (
      filtred.name.toLowerCase().includes(item) ||
      filtred.brand.toLowerCase().includes(item) ||
      filtred.tag.toLowerCase().includes(item)
    )
  }

  var matched
  criteria === ""
    ? (matched = products.filter(i => searchFilter(i)))
    : (matched = products
        .filter(p => p.type === criteria)
        .filter(i => searchFilter(i)))
  console.log(matched)
  return (
    <div>
      <div className="space-x-4 mb-2">
        <button
          className="px-2 border rounded border-purple-500"
          value="Perfume"
          onClick={handleClick}
        >
          Perfumes
        </button>
        <button
          className="px-2 border rounded border-purple-500"
          value="Maquillaje"
          onClick={handleClick}
        >
          Maquillajes
        </button>
        <button
          className="px-2 border rounded border-purple-500"
          value="Cabello"
          onClick={handleClick}
        >
          Cabello
        </button>
        <button
          className="px-2 border rounded border-purple-500"
          value=""
          onClick={handleClick}
        >
          Todos los productos
        </button>
      </div>
      <form>
        <input
          className="border rounded"
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
              <div key={product.id}>
                <h1>{product.name}</h1>
                <Img
                  className="h-20 w-20"
                  fluid={product.image.childImageSharp.fluid}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default SearchBar
