import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from './Logo'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Search from './Search'
import Language from './Language'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		mainPage: {
			flexGrow: 1,
			width: 'auto',
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				width: 'auto',
				display: 'inline-block',
			},
		},
		notMainPage: {
			flexGrow: 1,
			width: 'auto',
			display: 'block',
		},
	}),
)

export default function Header(): JSX.Element {
	const classes = useStyles()

	const getDisplayPropertyForTitle = () => {
		return document.location.pathname === '/'
			? classes.mainPage
			: classes.notMainPage
	}

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<Logo />
					</Link>
					<Typography
						className={getDisplayPropertyForTitle()}
						variant='h6'
						noWrap>
						Travel App
					</Typography>
					{document.location.pathname === '/' && <Search />}
					<Language />
				</Toolbar>
			</AppBar>
		</div>
	)
}
