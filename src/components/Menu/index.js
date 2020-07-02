import React, { useEffect, useState } from 'react'
import Search from 'Components/Search'
import MenuItem from 'Components/MenuItem'
import cartIcon from './cart.svg'
import './styles.css'

function Menu({ items, searchText, logo, announcement }) {
  const menuItems = items.map((x, i) => <MenuItem key={i} data={x} announcement={announcement} />)
  const [bgOpacity, setBgOpacity] = useState({ opacity: 0 })

  const handleScroll = ev => {
    let opacity = window.scrollY / 300
    if (opacity > 1) opacity = 1
    setBgOpacity({ opacity })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="Menu">
      <div className="Menu-color" style={bgOpacity}></div>
      <img className="Menu-logo" src={logo} />
      <div className="Menu-items">{menuItems}</div>
      <Search placeholder={searchText} />
      <a className="link-container" href="/">
        <img className="cart-icon" src={cartIcon} />
      </a>
    </div>
  )
}

export default Menu
