import React from 'react'
import CountryPage from '@/components/CountryPage'

jest.mock('react-dom')
describe('CountryPage', () => {
	it('should render correctly', () => {
		expect(render).toHaveBeenCalledWith(
			<CountryPage title='mockTitle' url='mockUrl' />,
			'element-node',
		)
		expect(render).toHaveBeenCalledTimes(1)
	})
})
