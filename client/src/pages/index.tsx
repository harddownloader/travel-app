import React, {useState} from 'react'
import Header from '@/components/header/'
import logo from '@/assets/images/logo.png'
import Video from '@/components/Video'
import Currencies from '@/components/Currencies'
import '@/index.scss'

const videoSrc = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

export default function src(): JSX.Element {
	return (
		<>
			<Header />
			<Currencies currency="EUR" />
			<Video 
				poster={logo}
				src={videoSrc}
			/>
			<div className='container'>
				<img src={logo} alt='' />
			</div>
		</>
	)
}
