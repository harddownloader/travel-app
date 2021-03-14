import React, { useState, useContext, useEffect } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { SvgIcon } from '@material-ui/core'
import getLangOptions from './LangOptions'
import { Context } from '@/utils/Context.jsx'
import IcoRussia from '@/assets/images/language-icons/russia.svg'
import IcoEng from '@/assets/images/language-icons/united-kingdom.svg'
import IcoGermany from '@/assets/images/language-icons/germany.svg'
import Select from '@material-ui/core/Select'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		langSelect: {
			'& .MuiInputBase-input': {
				display: 'flex',
			},
		},
		IcoSelect: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}),
)

const Language = (): JSX.Element => {
	const classes = useStyles()
	const { ContextLeng } = useContext(Context)
	const [leng, setLeng] = ContextLeng
	const [langIco, setLangIco] = useState(<IcoRussia />)
	const [langOptions, setLangOptions] = useState(getLangOptions(leng))
	const [open, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false)
	}
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setLeng(event.target.value as string)
	}
	const handleOpen = () => {
		setOpen(true)
	}

	useEffect(() => {
		setLangOptions(getLangOptions(leng))
		setLangIco(
			leng === 'ru' ? (
				<IcoRussia />
			) : leng === 'en' ? (
				<IcoEng />
			) : (
				<IcoGermany />
			),
		)
	}, [leng, setLeng])

	return (
		<>
			<Select
				className={classes.langSelect}
				labelId='demo-controlled-open-select-label'
				id='customized-menu'
				open={open}
				onClose={handleClose}
				onOpen={handleOpen}
				value={leng}
				onChange={handleChange}>
				{langOptions.map((langOptions, index) => (
					<MenuItem key={langOptions.leng} value={langOptions.descriptor}>
						<ListItemIcon className={classes.IcoSelect}>
							<SvgIcon>{langOptions.img}</SvgIcon>
						</ListItemIcon>
						<ListItemText primary={langOptions.leng} />
					</MenuItem>
				))}
			</Select>
			{/* <Menu
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
			</Menu> */}
		</>
	)
}

export default Language
