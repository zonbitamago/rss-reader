import React from 'react'
import { shallow } from 'enzyme'

import Page from './Page'

describe('Page', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Page {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})