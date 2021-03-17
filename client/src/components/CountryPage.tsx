import React, { useEffect, useState, useContext } from 'react'
import { Context } from '@/utils/Context.jsx'

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
import TimePicker from './TimePicker'

type CountryPage = () => JSX.Element
const CountryPage: CountryPage = () => {
	const { ContextLeng } = useContext(Context)
	const [leng, ] = ContextLeng

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
		const countryId = document.location.pathname.slice(1)
		const countryDataPromise = getCountryData(countryId, leng)
		countryDataPromise
			.then((result: any) => {
				setCountryData(result)
				setLoaded(true)
			})
			.catch((e: any) => console.log(e))
	}, [leng])

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
				<TimePicker capital={countryData.capital} language={leng}/>
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
