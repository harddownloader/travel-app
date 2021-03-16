import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import PlaceItem from '@/components/PlaceItem'

describe('PlaceItem', () => {
	it('should render correctly', () => {
		const output = shallow(
			<PlaceItem
				name='Италия'
				photoUrl='https://goo.gl/fbAQLP'
				description='ru'
			/>,
		)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
