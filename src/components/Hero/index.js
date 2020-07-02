import React from 'react'
import './styles.css'

function Hero({ as = 'h1', title, subtitle, bgImage }) {
  const ComponentType = as
  const style = {
    backgroundImage: `url(${bgImage})`,
  }
  return (
    <div className="Hero" style={style}>
      <div className="Hero-text">
        <ComponentType className="Hero-text-title">{title}</ComponentType>
        <h3 className="Hero-text-subtitle">{subtitle}</h3>
      </div>
    </div>
  )
}

export default Hero
