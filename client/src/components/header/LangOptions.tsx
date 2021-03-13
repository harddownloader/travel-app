import React from 'react'
import IcoRussia from '@/assets/images/language-icons/russia.svg'
import IcoEng from '@/assets/images/language-icons/united-kingdom.svg'
import IcoGermany from '@/assets/images/language-icons/germany.svg'

type Options = {
	leng: string
	img: JSX.Element
	descriptor: string
}[]
const options = (leng: string): Options => [
	{
		leng: leng === 'ru' ? 'Английский' : leng === 'en' ? 'English' : 'Englisch',
		img: <IcoEng />,
		descriptor: 'en',
	},
	{
		leng: leng === 'ru' ? 'Русский' : leng === 'en' ? 'Russian' : 'Russisch',
		img: <IcoRussia />,
		descriptor: 'ru',
	},
	{
		leng: leng === 'ru' ? 'Немецкий' : leng === 'en' ? 'Germany' : 'Deutsche',
		img: <IcoGermany />,
		descriptor: 'de',
	},
]

export default options
