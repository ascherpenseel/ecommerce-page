import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import ExampleComponent from './'

export default { title: 'ExampleComponent', component: ExampleComponent, decorators: [withKnobs] }

export const Default = () => (
  <>
    <ExampleComponent
      as={select('as', {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
      })}
      content={text('children', 'an example component, Hello World!')}
    />
  </>
)
