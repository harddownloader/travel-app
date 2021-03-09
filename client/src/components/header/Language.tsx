import React, { useState } from 'react'
import LanguageIcon from '@material-ui/icons/Language'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import { SvgIcon } from '@material-ui/core'
import LangOptions from './LangOptions'

const Language = (): JSX.Element => {
	//const classes = useStyles()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLElement>,
		index: number,
	) => {
		setSelectedIndex(index)
		setAnchorEl(null)
	}

	return (
		<div>
			<IconButton
				aria-label='delete'
				aria-controls='customized-menu'
				aria-haspopup='true'
				onClick={handleClick}>
				<LanguageIcon />
			</IconButton>
			<Menu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				{LangOptions.map((LangOptions, index) => (
					<MenuItem
						//	className={classes.root}
						key={LangOptions.leng}
						selected={index === selectedIndex}
						onClick={event => handleMenuItemClick(event, index)}>
						<ListItemIcon>
							<SvgIcon>{LangOptions.img}</SvgIcon>
						</ListItemIcon>
						<ListItemText primary={LangOptions.leng} />
					</MenuItem>
				))}
			</Menu>
		</div>
	)
}

export default Language
