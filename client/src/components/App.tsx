import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '@/components/main/'
import Header from '@/components/header/'
import CountryPage from './CountryPage'
import Footer from '@/components/footer/Footer'
type App = () => JSX.Element
const App: App = () => {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<>
						<Header />
						<Main />
						<Footer />
					</>
				</Route>
				<Route path='/:id'>
					<CountryPage />
				</Route>
			</Switch>
		</>
	)
}

export default App
