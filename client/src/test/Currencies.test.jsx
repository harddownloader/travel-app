import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Currencies from '@/components/Currencies'

describe('Currencies', () => {
	it('should render correctly', () => {
		const output = shallow(<Currencies />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
