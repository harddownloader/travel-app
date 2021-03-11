import React from 'react';
import { Player } from 'video-react';
// import logo from '@/assets/images/logo.png'
// const videoSrc = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

/**
 * logo - path to logo (or file from "import")
 * src - path to video
 */
export default props => {
  return (
    <Player
      playsInline
      poster={props.poster}
      src={props.src}
    />
  );
};