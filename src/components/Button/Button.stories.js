import React from 'react'

import Button from './'

export default { title: 'Button', component: Button }

export const types = () => (
  <>
    <Button className="Btn--default" as="button">
      Default Button
    </Button>
    {/* ... */}
  </>
)
