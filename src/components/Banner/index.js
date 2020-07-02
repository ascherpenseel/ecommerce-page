import React from 'react'
import './styles.css'

function Banner({ as = 'h3', url, title, text, button, bgImage }) {
  const ComponentType = as
  const style = {
    backgroundImage: `url(${bgImage})`,
  }
  return (
    <a href={url}>
      <div className="Banner" style={style}>
        <ComponentType className="Banner-title">{title}</ComponentType>
        <p className="Banner-text">{text}</p>
        <div className="Banner-button">{button}</div>
      </div>
    </a>
  )
}

export default Banner
