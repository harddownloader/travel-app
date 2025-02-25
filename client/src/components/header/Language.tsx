import React, { useState, useContext, useEffect } from 'react'
import { SvgIcon } from '@material-ui/core'
import getLangOptions from './LangOptions'
import { Context } from '@/utils/Context.jsx'
import IcoRussia from '@/assets/images/language-icons/russia.svg'
import IcoEng from '@/assets/images/language-icons/united-kingdom.svg'
import IcoGermany from '@/assets/images/language-icons/germany.svg'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
	createStyles({
		SelectBox: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			paddingLeft: 10,
		},
		SelectInput: {
			background: 'none',
		},
	}),
)

const Language = (): JSX.Element => {
	const classes = useStyles()
	const { ContextLeng } = useContext(Context)
	const [leng, setLeng] = ContextLeng
	const [langIco, setLangIco] = useState(<IcoRussia />)
	const [langOptions, setLangOptions] = useState(getLangOptions(leng))
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setLeng(event.target.value as string)
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
		<div className={classes.SelectBox}>
			<select
				value={leng}
				onChange={handleChange}
				className={classes.SelectInput}>
				{langOptions.map(langOptions => (
					<option key={langOptions.leng} value={langOptions.descriptor}>
						{langOptions.leng}
					</option>
					// <MenuItem key={langOptions.leng} value={langOptions.descriptor}>
					// 	<ListItemText primary={langOptions.descriptor} />
					// </MenuItem>
				))}
			</select>
			<SvgIcon>{langIco}</SvgIcon>
		</div>
	)
}

export default Language
