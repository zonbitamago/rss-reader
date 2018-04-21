import React from 'react'
import { shallow } from 'enzyme'

import Side from './Side'

describe('Side', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Side {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})