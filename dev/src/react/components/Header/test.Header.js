import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('Header', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Header {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})