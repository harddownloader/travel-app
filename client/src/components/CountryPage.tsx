import React, { useEffect, useState } from 'react'

//material ui
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

//helpers
import getCountryData from '../helpers/getCountryData'

//components
import About from './About'
import PlacesList from './PlacesList'

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
		const countryId = document.location.pathname.slice(1)
		const countryDataPromise = getCountryData(countryId)
		countryDataPromise
			.then((result: any) => {
				setCountryData(result)
				setLoaded(true)
			})
			.catch((e: any) => console.log(e))
	}, [])

	return (
		<>
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
		</>
	)
}

export default CountryPage
