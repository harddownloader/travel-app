import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import PlaceItem from '@/components/Video'

describe('Video', () => {
	it('should render correctly', () => {
		const output = shallow(
			<PlaceItem
				poster='viiiiu'
				src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
			/>,
		)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
