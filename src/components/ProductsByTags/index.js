import React, { useState, useRef, useEffect } from 'react'
import ProductList from 'Components/ProductList'
import './styles.css'
import caret from './down-arrow.svg'

function ProductsByTags({ products }) {
  const tags = []
  const refs = []
  for (let p of products) {
    for (let t of p.tags) {
      if (!tags.includes(t)) {
        tags.push(t)
        refs.push(useRef(null))
      }
    }
  }
  const [currentTag, setCurrentTag] = useState(tags[0])
  const [activeMenu, setActiveMenu] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 130)

  const handleScroll = ev => {
    let currY = window.scrollY
    const offsets = refs.map(r => r.current.offsetTop - 150)

    offsets.push(currY)
    offsets.sort((a, b) => a - b)
    let range = offsets.indexOf(currY) - 1
    if (range < 0) {
      range = 0
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }

    setCurrentTag(prev => {
      return tags[range]
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="ProductsByTags">
      <div className="ProductsByTags-menu">
        <div
          className={`ProductsByTags-menu-current ${
            activeMenu ? 'ProductsByTags-menu-current--active' : ''
          }`}
        >
          <div
            className={`ProductsByTags-menu-current-title ${
              openMenu ? 'ProductsByTags-menu-current-title--active' : ''
            }`}
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
          >
            {currentTag}
            <img className="ProductsByTags-menu-current-caret" src={caret} />
            <div
              className={`ProductsByTags-menu-list ${
                openMenu ? 'ProductsByTags-menu-list--active' : ''
              }`}
            >
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className="ProductsByTags-menu-item"
                  onClick={() => {
                    scrollToRef(refs[i])
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {tags.map((tag, i) => (
        <ProductList
          key={i}
          products={products.filter(p => p.tags.includes(tag))}
          title={tag}
          reference={refs[i]}
        />
      ))}
    </div>
  )
}

export default ProductsByTags
