import React from 'react'
import { shallow } from 'enzyme'

import Menus from './Menus'

describe('Menus', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Menus {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})