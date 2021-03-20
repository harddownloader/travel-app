import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

import logo from '@/assets/images/hail-white-18dp.svg'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {},
		logoIcons: {
			fontSize: '2rem',
			color: '#fff'
		}
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
			{/* <Avatar alt='Cindy Baker' src={logo} /> */}
			{/* <Icon>hail</Icon> */}
			<SvgIcon component={logo} className={classes.logoIcons} />
		</IconButton>
	)
}

export default Logo
