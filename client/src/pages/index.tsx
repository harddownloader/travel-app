import React from 'react'
import Header from '@/components/header/'
import logo from '@/assets/images/logo.png'
import Video from '@/components/Video'
import '@/index.scss'

const videoSrc = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

export default function src(): JSX.Element {
	return (
		<>
			<Header />
			<Video 
				poster={logo}
				src={videoSrc}
			/>
			<div className='container'>
				<h1>Hello World!</h1>
				<img src={logo} alt='' />
			</div>
		</>
	)
}
