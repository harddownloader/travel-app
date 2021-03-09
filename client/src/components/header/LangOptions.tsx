import React from 'react'
import IcoRussia from '@/assets/images/language-icons/russia.svg'
import IcoEng from '@/assets/images/language-icons/united-kingdom.svg'
import IcoPoland from '@/assets/images/language-icons/poland.svg'

const options: {
	leng: string
	img: JSX.Element
}[] = [
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

export default options
