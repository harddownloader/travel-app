import React from 'react'
import '../index.scss'
import App from '../components/App'
import {BrowserRouter as Router} from 'react-router-dom'

export default function src(): JSX.Element {
	return (
		<Router>
			<App />
		</Router>
	)
}
