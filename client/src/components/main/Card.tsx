import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import './card.css'
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			cursor: 'pointer',
			maxWidth: 345,
			height: '90%',
			color: '#000',
			background: '#ccccf1',
			transition: 'all .5s',
			'& .MuiCard-root': {
				paddingBottom: 5,
			},
			'&:hover': {
				boxShadow: '0px 5px 10px 2px rgba(71, 73, 75, 0.2)',
				color: '#1c2402',
				background: 'white',
				'& .MuiCardMedia-root': {
					transform: 'scale(1.1)',
				},
			},
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
			transition: 'all .5s',
			'&:hover': {},
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: red[500],
		},
	}),
)

export default function RecipeReviewCard({
	name,
	imageimageUrl,
	capital,
	description,
}: {
	name: string
	imageimageUrl: string
	capital: string
	description: string
}): JSX.Element {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						R
					</Avatar>
				}
				title={name}
				subheader={capital}
			/>
			<CardMedia className={classes.media} image={imageimageUrl} title={name} />
			<CardContent>
				<Typography variant='body2' className='card-info' component='p'>
					{description}
				</Typography>
			</CardContent>
		</Card>
	)
}
