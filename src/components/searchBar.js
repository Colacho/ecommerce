import React, { useState } from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

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

  let matched = []
  criteria === ""
    ? (matched = products.filter(i => searchFilter(i)))
    : (matched = products
        .filter(p => p.type === criteria)
        .filter(i => searchFilter(i)))

  return (
    <div>
      <div className="space-x-4 mb-2">
        <button
          className="px-2 border rounded border-purple-500"
          value="Perfume"
          onClick={handleClick}
          style={{
            backgroundColor: criteria === "Perfume" ? "#8b5cf6" : "white",
          }}
        >
          Perfumes
        </button>
        <button
          className="px-2 border rounded border-purple-500"
          value="Maquillaje"
          onClick={handleClick}
          style={{
            backgroundColor: criteria === "Maquillaje" ? "#8b5cf6" : "white",
          }}
        >
          Maquillajes
        </button>
        <button
          className="px-2 border rounded border-purple-500"
          value="Cabello"
          onClick={handleClick}
          style={{
            backgroundColor: criteria === "Cabello" ? "#8b5cf6" : "white",
          }}
        >
          Cabello
        </button>
        <button
          className="px-2 border rounded border-purple-500"
          value=""
          onClick={handleClick}
          style={{
            backgroundColor: criteria === "" ? "#8b5cf6" : "white",
          }}
        >
          Todos los productos
        </button>
      </div>
      <div className="flex space-x-2">
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
        <button>
          <FontAwesomeIcon icon={faSearch} className="" />
        </button>
      </div>
      <div className="flex flex-wrap">
        {item !== ""
          ? matched.map(product => (
              <div key={product.id} className="space-x-2 p-2">
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
