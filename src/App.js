import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// normalize and fonts
import './global.css'

import pagePathsMapping from './pagePathsMapping'
import * as Components from './components'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          render={({ location }) => {
            const page =
              pagePathsMapping[location.pathname === '/' ? '/index' : location.pathname] ||
              pagePathsMapping['/not-found']

            return page.sections.map((section, index) => {
              const Component = Components[section.componentName]

              return <Component key={index} {...section.props} />
            })
          }}
        />
      </Switch>
    </Router>
  )
}

export default App
