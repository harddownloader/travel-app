import React, { useEffect, useState } from 'react'

//material ui
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

//helpers
import getCountryData from '../utils/getCountryData'

//components
import About from './About'
import PlacesList from './PlacesList'
import Header from './header'
import Footer from './footer/Footer'

type CountryPage = () => JSX.Element
const CountryPage: CountryPage = () => {
	const [countryData, setCountryData] = useState({
		capital: '',
		name: '',
		description: '',
        places: ''
	})
	const [loaded, setLoaded] = useState(false)

	//load data and update dom
	useEffect(() => {
		const urlParams = new URLSearchParams(document.location.search);
		let lang = urlParams.get('lang')
		if (!lang) lang = 'en'
		const countryId = document.location.pathname.slice(1)
		const countryDataPromise = getCountryData(countryId, lang)
		countryDataPromise
			.then((result: any) => {
				setCountryData(result)
				setLoaded(true)
			})
			.catch((e: any) => console.log(e))
	}, [])

	return (
		<>
			<Header />
			{!loaded && <CircularProgress />}
			{loaded && (
				<Typography variant='h2' component='h1'>
					{countryData.name}
				</Typography>
			)}
			{loaded && (
				<Typography variant='h3' component='h2'>
					{countryData.capital}
				</Typography>
			)}
			{loaded && (
				<About description={countryData.description} name={countryData.name} />
			)}
            {loaded && (
				<PlacesList places={countryData.places} />
			)}
			<Footer />
		</>
	)
}

export default CountryPage
