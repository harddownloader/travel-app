import React from 'react'
import LanguageIcon from '@material-ui/icons/Language'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import IcoRussia from '@/assets/images/language-icons/russia.svg'
import IcoEng from '@/assets/images/language-icons/united-kingdom.svg'
import IcoPoland from '@/assets/images/language-icons/poland.svg'
import { SvgIcon } from '@material-ui/core'

const options = [
	{
		leng: 'English',
		img: <IcoEng />,
	},
	{
		leng: 'Russian',
		img: <IcoRussia />,
	},
	{
		leng: 'Polish',
		img: <IcoPoland />,
	},
]

const Language = (): JSX.Element => {
	//const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const [selectedIndex, setSelectedIndex] = React.useState(0)
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
				{options.map((option, index) => (
					<MenuItem
						//	className={classes.root}
						key={option.leng}
						selected={index === selectedIndex}
						onClick={event => handleMenuItemClick(event, index)}>
						<ListItemIcon>
							<SvgIcon>{option.img}</SvgIcon>
						</ListItemIcon>
						<ListItemText primary={option.leng} />
					</MenuItem>
				))}
			</Menu>
		</div>
	)
}

export default Language
