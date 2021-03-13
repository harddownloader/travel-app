import React, { useState, useContext, useEffect } from 'react'
import LanguageIcon from '@material-ui/icons/Language'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import { SvgIcon } from '@material-ui/core'
import getLangOptions from './LangOptions'
import { Context } from '@/utils/Context.jsx'

const Language = (): JSX.Element => {
	const { ContextLeng } = useContext(Context)
	const [leng, setLeng] = ContextLeng
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [langOptions, setLangOptions] = useState(getLangOptions(leng))
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLElement>,
		index: number,
		descriptor: string,
	) => {
		setSelectedIndex(index)
		setLeng(descriptor)
		//	setAnchorEl(null)
	}
	useEffect(() => {
		setLangOptions(getLangOptions(leng))
	}, [leng])

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
				{langOptions.map((langOptions, index) => (
					<MenuItem
						//	className={classes.root}
						key={langOptions.leng}
						selected={index === selectedIndex}
						onClick={event =>
							handleMenuItemClick(event, index, langOptions.descriptor)
						}>
						<ListItemIcon>
							<SvgIcon>{langOptions.img}</SvgIcon>
						</ListItemIcon>
						<ListItemText primary={langOptions.leng} />
					</MenuItem>
				))}
			</Menu>
		</div>
	)
}

export default Language
