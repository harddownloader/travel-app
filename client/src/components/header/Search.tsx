import React, { useContext, useState, useEffect } from 'react'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { Context } from '@/utils/Context.jsx'
import axios from 'axios'
import { CountryType } from '@/utils/typeCountry'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(1),
				width: 'auto',
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}),
)

const Search = (): JSX.Element => {
	const classes = useStyles()
	const { ContextCountries, ContextLeng } = useContext(Context)
	const [, setCountries] = ContextCountries
	const [value, setValue] = useState('')
	const [leng] = ContextLeng
	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	useEffect(() => {
		if (!/[а-я]/i.test(value) && leng === 'ru') return
		if (/[а-я]/i.test(value) && leng != 'ru') return
		const url = `https://rsschool-travel-app-be.herokuapp.com/countries?lang=${leng}`
		let didCancel = false
		const fetchData = async () => {
			try {
				const result = await axios(url)
				if (!didCancel) {
					setCountries(
						result.data.filter(
							(e: CountryType) =>
								e.capital
									.toLocaleLowerCase()
									.includes(value.toLocaleLowerCase().trim()) ||
								e.name
									.toLocaleLowerCase()
									.includes(value.toLocaleLowerCase().trim()),
						),
					)
				}
			} catch (error) {
				if (!didCancel) {
					console.log(error)
				}
			}
		}
		fetchData()
		return () => {
			didCancel = true
		}
	}, [value, setValue]) // eslint-disable-line
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				value={value}
				onChange={handlerChange.bind(this)}
				placeholder=''
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search', autoFocus: true }}
			/>
		</div>
	)
}

export default Search
