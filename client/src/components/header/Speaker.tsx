import React, { useState, useEffect } from 'react'
import "regenerator-runtime/runtime.js";
import SearchIcon from '@material-ui/icons/Search'
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition'
import MicroIcon from '@material-ui/icons/Mic'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() =>
	createStyles({
		root: {},
		microIcon: {
			cursor: 'pointer',
			transition: 'all 0.5s',
			'&:hover': {
				opacity: 1
			}

		},
		microIconDeactive: {
			opacity: 0.5
		},
		microIconActive: {
			opacity: 1
		}
	}),
)

const Speaker = ({ value, setValue, lang }: any) => {

	const classes = useStyles()

	const [active, setActive] = useState(false)
	const { transcript, resetTranscript } = useSpeechRecognition()

	useEffect(() => {
			if(
				transcript.includes('очистить') ||
				transcript.includes('delete')   ||
				transcript.includes('löschen')
				) {
				resetTranscript('')
			}
			setValue(transcript)
	}, [transcript])

	const setSpeach = () => {
			setActive(!active)
			!active
					? SpeechRecognition.startListening({ continuous: true, language: lang })
					: (SpeechRecognition.stopListening(), resetTranscript(''))
	}

	return <MicroIcon onClick={setSpeach} className={`${active ? classes.microIconActive : classes.microIconDeactive} ${classes.microIcon}`} />
}

export default Speaker
