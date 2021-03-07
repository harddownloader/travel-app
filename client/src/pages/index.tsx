import React from 'react'
// import logo from '../assets/logo.png';
import logo from '../assets/images/logo.png'
import '../index.scss'

export default function src(): JSX.Element {
	return (
		<div className='container'>
			<h1>Hello World!</h1>
			<img src={logo} alt='' />
		</div>
	)
}
