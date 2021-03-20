import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Card from '@/components/card/Card'

describe('Card', () => {
	it('should render correctly', () => {
		const output = shallow(<Card />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
