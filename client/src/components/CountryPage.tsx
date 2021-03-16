import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

//material ui
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


//helpers
import getCountryData from '../utils/getCountryData'

//components
import About from './About'
import PlacesList from './PlacesList'
import Header from './header'
import Footer from './footer/Footer'
import Currencies from '@/components/Currencies'

const useStyles = makeStyles({
  root: {},
	countryAbout: {
		marginBottom: 60
	}
});

type CountryPage = () => JSX.Element
const CountryPage: CountryPage = () => {
	const classes = useStyles();

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
			<Container maxWidth="lg">
			{loaded && (
				<Typography variant='h2' component='h1'>
					{countryData.name}
				</Typography>
			)}
			{loaded && (
				<PlacesList places={countryData.places} />
			)}
			{loaded && (
				<Typography variant='h3' component='h2'>
					{countryData.capital}
				</Typography>
			)}
			{/* {loaded && (
				<About description={countryData.description} name={countryData.name} />
			)} */}
      
			 {loaded && (
					<Grid container spacing={3} className={classes.countryAbout}>
						<Grid item lg={9} md={9} xs={12}>
							<About description={countryData.description} name={countryData.name} />
						</Grid>
						<Grid item lg={3} md={3} xs={12}>
							<Currencies currency={countryData.currency}/>
					 	</Grid>
				 	</Grid>
			)}
			</Container>
			<Footer />
		</>
	)
}

export default CountryPage
