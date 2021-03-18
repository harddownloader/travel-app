import React, { useState, useEffect } from 'react';
// import { Context } from '@/utils/Context';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import SearchIcon from '@material-ui/icons/Search'


// const Speaker = ({value, setValue}: any) => {
// 	// const { contextValue, ContextisActive } = useContext(Context);
// 	// const [speakValue, setSpeakValue] = contextValue;
// 	const [isActive, setIsActive] = useState(false);
// 	const { transcript, setTranscript } = useSpeechRecognition();

// 	// useEffect(() => {
// 	// 	isActive && console.log('текущая фраза:', transcript);
// 	// 	setValue(transcript);
// 	// }, [transcript]);

// 	const setSpeach = () => {
// 		setIsActive(!isActive);
// 		!isActive
// 			? SpeechRecognition.startListening({ continuous: true })
// 			: SpeechRecognition.stopListening();
// 	};

// 	return (
//     <SearchIcon onClick={() => {isActive && setSpeach()}} />
// 	);
// };

// export default Speaker;


const Speaker = ({value, setValue}: any) => {
	// const { contextValue, ContextisActive } = useContext(Context);
	// const [speakValue, setSpeakValue] = contextValue;
	const [isActive, setIsActive] = useState(false);
	const { transcript, setTranscript } = useSpeechRecognition();

	// useEffect(() => {
	// 	isActive && console.log('текущая фраза:', transcript);
	// 	setValue(transcript);
	// }, [transcript]);

	const setSpeach = () => {
		setIsActive(!isActive);
		!isActive
			? SpeechRecognition.startListening({ continuous: true })
			: SpeechRecognition.stopListening();
	};

	return (
    <SearchIcon onClick={() => {isActive && setSpeach()}} />
	);
};

export default Speaker;