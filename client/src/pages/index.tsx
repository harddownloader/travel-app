import React, { useState } from 'react'
import Header from '@/components/header/'
import Main from '@/components/main/'
import '@/index.scss'
import Footer from '@/components/footer/Footer'
import { Context } from '@/utils/Context.jsx'

export default function Src(): JSX.Element {
	const [countries, setCountries] = useState({
		hits: [],
	})
	const [leng, setLeng] = useState('ru')
	const [data, setData] = useState([])

	return (
		<Context.Provider
			value={{
				ContextLeng: [leng, setLeng],
				ContextCountries: [countries, setCountries],
				ContextData: [data, setData],
			}}>
			<>
				<Header />
				<Main />
				<Footer />
			</>
		</Context.Provider>
	)
}
