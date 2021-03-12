import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import Card from './Card'
import './swiper.css'
import useDataApi from '@/utils/useDataApi'

SwiperCore.use([Navigation, Pagination, EffectFade])

const Main = (): JSX.Element => {
	const [
		{ data, isLoading, isError },
		/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
		doFetch,
	] = useDataApi('https://travel-app-demo.herokuapp.com/countries?lang=ru', {
		hits: [],
	})
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
			slidesPerColumn={3}
			breakpoints={{
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
					slidesPerColumn: 3,
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
					{!data.hits &&
						data.map((item: Country) => (
							<SwiperSlide
								key={item.id}
								onClick={() => {
									console.log(data)
								}}>
								<Card />
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
