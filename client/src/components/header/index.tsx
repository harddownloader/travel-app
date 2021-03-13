import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from './Logo'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Search from './Search'
import Language from './Language'
import Maps from '../map/Map'

const a = window.pageYOffset
console.log(a)

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				width: 'auto',
				display: 'inline-block',
			},
		},
	}),
)

export default function SearchAppBar(): JSX.Element {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Logo />
					<Typography className={classes.title} variant='h6' noWrap>
						Travel-app
					</Typography>
					<Search />
					<Language />
				</Toolbar>
			</AppBar>
		</div>
	)
}
