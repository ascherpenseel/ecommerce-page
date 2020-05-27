import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { addDecorator } from '@storybook/react'


addDecorator(storyFn => (
  <Router>
    {storyFn()}
  </Router>
))
