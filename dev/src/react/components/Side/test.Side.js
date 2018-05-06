import React from 'react'
import {
  shallow
} from 'enzyme'
import {
  electronUtil
} from "../../../../__mocks__/electronUtilSettings";

import Side from './Side'

describe('Side', () => {
      let component, props

      beforeEach(() => {
          props = {
            electronUtil: electronUtil
          }
          component = shallow( < Side { ...props
            }
            />)
          })

        it('should', () => {
          expect(component).toMatchSnapshot()
        })
      })