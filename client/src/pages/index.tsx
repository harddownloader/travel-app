import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '@/components/header/'
import Cards from '@/components/cards'
// import Video from '@/components/Video'
// import Currencies from '@/components/Currencies'
// import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import CountryPage from '@/components/CountryPage'

import '@/index.scss'
import Footer from '@/components/footer/Footer'
import { Context } from '@/utils/Context.jsx'

export default function Src(): JSX.Element {
	const [countries, setCountries] = useState({
		hits: [],
	})

	// console.log('pathname', document.location.pathname)

	const [leng, setLeng] = useState('ru')
	const [data, setData] = useState([])

	return (
		<Context.Provider
			value={{
				ContextLeng: [leng, setLeng],
				ContextCountries: [countries, setCountries],
				ContextData: [data, setData],
			}}>
			<Router>
				{/* <ScopedCssBaseline> */}
				<Switch>
					{/* home page */}
					<Route exact path='/'>
						<div className='main-root'>
							<Header />
							<Cards />
						</div>
						<Footer />
					</Route>
					{/* country page */}
					<Route path='/:id'>
						<CountryPage />
					</Route>
				</Switch>
				{/* </ScopedCssBaseline> */}
			</Router>
		</Context.Provider>
	)
}
