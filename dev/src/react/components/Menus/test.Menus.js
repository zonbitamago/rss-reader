import React from 'react'
import {
  shallow
} from 'enzyme'
import {
  electronUtil
} from "../../../../__mocks__/electronUtilSettings";
import Menus from './Menus'

describe('Menus', () => {
      let component, props

      beforeEach(() => {
          props = {
            electronUtil: electronUtil
          }
          component = shallow( < Menus { ...props
            }
            />)
          })

        it('should', () => {
          expect(component).toMatchSnapshot()
        })
      })