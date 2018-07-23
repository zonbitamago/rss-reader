import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon'

describe('Icon', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Icon {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})