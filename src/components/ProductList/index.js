import React from 'react'
import Product from 'Components/Product'
import './styles.css'

function ProductList({ products, title, reference }) {
  const productElements = products.map((p, i) => <Product key={i} product={p} />)

  return (
    <div className="ProductList">
      <h2 className="ProductList-title" ref={reference}>
        {title}
      </h2>
      <div className="ProductList-row">{productElements}</div>
    </div>
  )
}

export default ProductList
