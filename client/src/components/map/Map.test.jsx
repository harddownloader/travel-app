import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Map from '@/components/map/Map'

describe('Map', () => {
	it('should render correctly', () => {
		const output = shallow(<Map />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
