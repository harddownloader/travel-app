import React from 'react'
import Header from '@/components/header/'
import Main from '@/components/main/'
import '@/index.scss'
import Footer from '@/components/footer/Footer'

export default function Src(): JSX.Element {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}
