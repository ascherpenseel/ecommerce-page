import React, { useState } from 'react'
import './styles.css'

function TextBlock({ as = 'h3', title, text }) {
  const ComponentType = as

  return (
    <div className="TextBlock">
      <ComponentType className="TextBlock-title">{title}</ComponentType>
      <p className="TextBlock-text">{text}</p>
    </div>
  )
}

export default TextBlock
