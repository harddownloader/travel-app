import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import logo from '@/assets/images/logo.png'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2),
		},
	}),
)

const Logo = (): JSX.Element => {
	const classes = useStyles()
	return (
		<IconButton
			edge='start'
			className={classes.menuButton}
			color='inherit'
			aria-label='menu'>
			<Avatar alt='Cindy Baker' src={logo} />
		</IconButton>
	)
}
export default Logo
