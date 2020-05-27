import React from 'react'
import Link from 'frontend-link'

import './styles.css'

const Button = ({ children, as = Link, ...restProps }) => {
  const Component = as

  return <Component {...restProps}>{children}</Component>
}

export default Button
