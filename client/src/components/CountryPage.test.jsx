import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CountryPage from '@/components/CountryPage'

describe('CountryPage', () => {
	it('should render correctly', () => {
		const output = shallow(<CountryPage />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
