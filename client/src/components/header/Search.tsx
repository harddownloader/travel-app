import React, { useContext, useState, useEffect } from 'react'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { Context } from '@/utils/Context.jsx'
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
		search: {
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
	const { ContextCountries, ContextLeng, ContextData } = useContext(Context)
	const [, setCountries] = ContextCountries
	const [data] = ContextData
	const [value, setValue] = useState('')
	const [leng] = ContextLeng
	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	useEffect(() => {
		if (!/[а-я]/i.test(value) && leng === 'ru' && value.length > 0) return
		if (/[а-я]/i.test(value) && leng != 'ru' && value.length > 0) return
		setCountries(
			data.filter(
				(e: CountryType) =>
					e.capital
						.toLocaleLowerCase()
						.includes(value.toLocaleLowerCase().trim()) ||
					e.name.toLocaleLowerCase().includes(value.toLocaleLowerCase().trim()),
			),
		)
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
					input: classes.search,
				}}
				inputProps={{ 'aria-label': 'search', autoFocus: true }}
			/>
		</div>
	)
}

export default Search
