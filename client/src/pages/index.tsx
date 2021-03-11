import React from 'react'
import Header from '@/components/header/'
import logo from '@/assets/images/logo.png'
import '@/index.scss'

export default function src(): JSX.Element {
	return (
		<>
			<Header />
			<div className='container'>
				<h1>Hello World!</h1>
				<img src={logo} alt='' />
			</div>
		</>
	)
}
