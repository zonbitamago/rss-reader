import React from 'react'
import { shallow } from 'enzyme'

import RegistedListModal from './RegistedListModal'

describe('RegistedListModal', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<RegistedListModal {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})