import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';

//material ui
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';


//helpers
import getCountryData from '../utils/getCountryData'
import { Context } from '@/utils/Context.jsx'

//components
import About from './About'
import PlacesList from './PlacesList'
import Header from './header'
import Footer from './footer/Footer'
import Currencies from '@/components/Currencies'

const useStyles = makeStyles({
	wrapper: {
		padding: '1rem',
		backgroundColor: '#cccded',
		margin: '1rem 0'
	},
  root: {},
	countryAbout: {
		marginBottom: 60
	}
});

type CountryPage = () => JSX.Element
const CountryPage: CountryPage = () => {
	const { ContextLeng } = useContext(Context)
	const [leng, ] = ContextLeng
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
			<Container maxWidth="lg">
			{loaded && (
				<Typography variant='h2' component='h1' align='center'>
					{countryData.name}
				</Typography>
			)}
			{loaded && (
				<PlacesList places={countryData.places} />
			)}
			<Card className={classes.wrapper}>
			{loaded && (
				<Typography variant='h3' component='h2'>
					{countryData.capital}
				</Typography>
			)}

      
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
			</Card>
			</Container>
			<Footer />
		</>
	)
}

export default CountryPage
