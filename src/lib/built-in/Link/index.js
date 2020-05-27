import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

/**
 * You can pass any prop you'd pass to <a> tag to Link component
 * also additionally react-router link props: https://reacttraining.com/react-router/web/api/Link
 */
const Link = ({ href, ...props }) => {
  return <RouterLink to={href} {...props} />
}

export default Link
