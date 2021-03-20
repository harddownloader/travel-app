import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import About from '@/components/About'

describe('About', () => {
	it('should render correctly', () => {
		const output = shallow(<About />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
