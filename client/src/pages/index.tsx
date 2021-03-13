//let it be
import App from '../components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '@/components/header/'
import Main from '@/components/main/'
import Video from '@/components/Video'
import Currencies from '@/components/Currencies'

import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';


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
		// <Router>
		// 	<App />
		// </Router>

		<Context.Provider
			value={{
				ContextLeng: [leng, setLeng],
				ContextCountries: [countries, setCountries],
				ContextData: [data, setData],
			}}>
			<>
				<ScopedCssBaseline>
					<Header />
					<Main />
					<Footer />
				</ScopedCssBaseline>
			</>
		</Context.Provider>
	)
}
