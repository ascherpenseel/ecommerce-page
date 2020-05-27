import React from 'react'
import Button from 'Components/Button'

import './styles.css'

const ExampleComponent = ({ as = 'h1', content }) => {
  const ComponentType = as
  return (
    <div className="ComponentType">
      <div>
        <ComponentType className="ComponentType-header">{content}</ComponentType>
        <Button as="button">Click me!</Button>
      </div>
    </div>
  )
}

export default ExampleComponent
