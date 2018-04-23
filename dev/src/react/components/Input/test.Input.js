import React from 'react'
import { shallow } from 'enzyme'

import Input from './Input'

describe('Input', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Input {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})