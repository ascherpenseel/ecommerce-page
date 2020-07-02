import React, { useState } from 'react'
import './styles.css'

function Product({ product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a className="Product" href={product.url}>
      <img
        className={`Product-image-hover ${hovered ? 'Product-image-hover--active' : ''}`}
        src={product.hover}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <img className="Product-image" src={product.image} />
      <div className="Product-name">{product.name}</div>
      <div className="Product-description">{product.description}</div>
      <div className="Product-price">$ {product.price}</div>
    </a>
  )
}

export default Product
