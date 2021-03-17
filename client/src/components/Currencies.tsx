/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

const useStyles = makeStyles({
	root: {},
	currency: {},
	currencyName: {},
	currencyValue: {
		paddingLeft: 10,
	},
})

function Currencies(props: any) {
	const classes = useStyles()
	const arr:
		| {
				from: string
				to: string
				value: string
		  }[]
		| [] = []
	const [currenciesList, setCurrenciesList] = useState(arr)

	const getCurrenctFromApi = (currencyBase: any, currencyTo: any) => {
		const url = `https://free.currconv.com/api/v7/convert?q=${currencyBase}_${currencyTo}&compact=ultra&apiKey=b6583c5ef13216beb703`
		return axios.get(url).then(response => {
			// console.log('response.data', response.data)
			return response.data
		})
	}

	useEffect(() => {
		const test = async () => {
			if (!props.currency) return
			// console.log('currency', props.currency)
			const currencyBase = props.currency
			const currencyTo = ['USD', 'EUR', 'RUB']
			const dataFromApiUSD = await getCurrenctFromApi(
				currencyBase,
				currencyTo[0],
			)
			const dataFromApiEUR = await getCurrenctFromApi(
				currencyBase,
				currencyTo[1],
			)
			const dataFromApiRUB = await getCurrenctFromApi(
				currencyBase,
				currencyTo[2],
			)
			const hy: {
				from: string
				to: string
				value: string
			}[] = [
				{
					from: currencyBase,
					to: currencyTo[0],
					value: dataFromApiUSD[`${currencyBase}_${currencyTo[0]}`],
				},
				{
					from: currencyBase,
					to: currencyTo[1],
					value: dataFromApiEUR[`${currencyBase}_${currencyTo[1]}`],
				},
				{
					from: currencyBase,
					to: currencyTo[2],
					value: dataFromApiRUB[`${currencyBase}_${currencyTo[2]}`],
				},
			]
			setCurrenciesList(hy)
		}
		test()
	}, [props.currency])


	return (
		<Card className={classes.root}>
			<CardContent>
				{currenciesList.map((currency: any) => {
					return (
						<div className={classes.currency} key={currency.to}>
							<Typography
								variant='h5'
								component='h2'
								className={classes.currencyName}>
								{currency.to}
							</Typography>
							<Typography
								color='textSecondary'
								className={classes.currencyValue}>
								{currency.value}
							</Typography>
						</div>
					)
				})}
			</CardContent>
		</Card>
	)
}

export default Currencies

