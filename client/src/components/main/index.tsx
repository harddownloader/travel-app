import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import Card from './Card'
import './swiper.css'
import useDataApi from '@/utils/useDataApi'
import { Context } from '@/utils/Context.jsx'
SwiperCore.use([Navigation, Pagination, EffectFade])

const Main = (): JSX.Element => {
	const { ContextCountries, ContextLeng } = useContext(Context)
	const [countries, setCountries] = ContextCountries
	const [leng, setLeng] = ContextLeng
	const [
		{ data, isLoading, isError },
		/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
		doFetch,
	] = useDataApi(
		`	https://rsschool-travel-app-be.herokuapp.com/countries?lang=${leng}`,
		{
			hits: [],
		},
	)

	return (
		<Swiper
			pagination={{
				clickable: true,
				el: '.pagination',
				type: 'custom',
				renderCustom: function (Swiper, current) {
					return current
				},
			}}
			slidesPerColumnFill='row'
			slidesPerView={1}
			slidesPerColumn={1}
			breakpoints={{
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
					slidesPerColumn: 2,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 40,
					slidesPerColumn: 3,
				},
			}}
			spaceBetween={20}
			navigation={{
				prevEl: '.prev',
				nextEl: '.next',
			}}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			{isError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<>
					{!countries.hits &&
						countries.map((item: Country) => (
							<SwiperSlide key={item.id}>
								<Card
									imageimageUrl={item.imageUrl}
									capital={item.capital}
									name={item.name}
									description={item.description}
								/>
							</SwiperSlide>
						))}
				</>
			)}
		</Swiper>
	)
}
type Country = {
	ISOCode: string
	capital: string
	capitalLocation: {
		coordinates: [number, number]
		type: string
	}
	currency: string
	description: string
	id: string
	imageUrl: string
	name: string
	videoUrl: string
}
export default Main
