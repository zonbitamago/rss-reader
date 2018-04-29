import React from 'react'
import { shallow } from 'enzyme'

import SettingModal from './SettingModal'

describe('SettingModal', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<SettingModal {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})