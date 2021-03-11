import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from './Card'
import './swiper.css'
SwiperCore.use([Navigation, Pagination, EffectFade])

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			zIndex: 0,
			height: '80%',
			overflow: 'auto',
			width: '80%',
		},
		swiper: {
			height: '100%',
			width: '100%',
		},
	}),
)

const Main = (): JSX.Element => {
	const classes = useStyles()
	//	const slideTo = index => swiper.slideTo(index)

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
					slidesPerView: 2,
					spaceBetween: 40,
					slidesPerColumn: 3,
				},
			}}
			spaceBetween={40}
			navigation={{
				prevEl: '.prev',
				nextEl: '.next',
			}}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
			<SwiperSlide>
				<Card />
			</SwiperSlide>
		</Swiper>
	)
}

export default Main
