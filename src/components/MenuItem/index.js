import React, { useState } from 'react'
import './styles.css'

function MenuItem({ data, announcement }) {
  const [hovered, setHovered] = useState(false)

  const menuList = data.subItems.map((subitem, i) => {
    const items = subitem.items.map((item, i) => (
      <a
        key={i}
        href={item.url}
        className={`SubmenuItem-list-link ${
          item.featured ? 'SubmenuItem-list-link--featured' : ''
        }`}
      >
        {item.key}
      </a>
    ))
    return (
      <div key={i} className="SubmenuItem">
        <a href={subitem.url}>
          <div className="SubmenuItem-title">{subitem.key}</div>
        </a>
        <div className="SubmenuItem-list">{items}</div>
      </div>
    )
  })

  return (
    <div
      className={`MenuItem ${hovered ? 'MenuItem--active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="MenuItem-title">{data.key}</div>
      <div
        className={`MenuItem-submenu-container ${
          hovered ? 'MenuItem-submenu-container--active' : ''
        }`}
      >
        <div className="MenuItem-submenu">{menuList}</div>
        <div className="MenuItem-bottombar">{announcement}</div>
      </div>
    </div>
  )
}

export default MenuItem
