import React, { useContext } from 'react'
import CardCountry from './Card'
import useDataApi from '@/utils/useDataApi'
import { Context } from '@/utils/Context.jsx'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { CountryType } from '@/utils/typeCountry'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			margin: 1,
			paddingLeft: 5,
			paddingRight: 5,
			height: '100%',
			flexGrow: 1,
		},
	}),
)

const Main = (): JSX.Element => {
	const classes = useStyles()
	const { ContextCountries, ContextLeng } = useContext(Context)
	const [countries] = ContextCountries
	const [leng] = ContextLeng
	const [
		{
			data, // eslint-disable-line
			isLoading,
			isError,
		},
		doFetch, // eslint-disable-line
	] = useDataApi(
		`https://rsschool-travel-app-be.herokuapp.com/countries?lang=${leng}`,
		{
			hits: [],
		},
	)

	return (
		<>
			{isError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<Grid container className={classes.root} spacing={2}>
					<Grid item xs={12}>
						<Grid container justify='center' spacing={4}>
							{!countries.hits &&
								countries.map((item: CountryType) => (
									<Grid key={item.id} item>
										<CardCountry
											imageimageUrl={item.imageUrl}
											capital={item.capital}
											name={item.name}
											description={item.description}
											id={item.id}
											code={item.ISOCode}
										/>
									</Grid>
								))
							}
						</Grid>
					</Grid>
				</Grid>
			)}
		</>
	)
}

export default Main