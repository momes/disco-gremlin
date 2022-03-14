import React, { useState, useEffect, useRef } from 'react';
import './MediaPlayer.css'; 
import Close from './close.png';
import Player from './player.png';
import ButtonPlay from './button-play.png';
import ButtonStop from './button-stop.png';
import ButtonPause from './button-pause.png';
import ButtonForward from './button-forward.png';
import ButtonBack from './button-back.png';
import Bar from './bar.png';
import AudioURL from './disco_gremlins_01.mp3';

function MediaPlayer({onClickClose}) {
  const [isPlaying, toggleIsPlaying] = useState(true);
  const audio = useRef()

  useEffect(() =>{
    !isPlaying ? audio.current.pause() : audio.current.play();
  }, [isPlaying])

  const handleClosePlayer = () => {
    onClickClose();
  }

  const onClick = (toggleState) => {
    console.log({isPlaying})
    console.log({toggleState})
    if (toggleState === 'stop' || toggleState === 'restart') {
      audio.current.currentTime = 0;
    }
    const toggleBool = (toggleState === 'play' || toggleState === 'restart') ? true : false;
    if (isPlaying !== toggleBool) {
    toggleIsPlaying(toggleBool)}
  }
  return (
    <div className='MediaPlayer'>
      <div className='top'>
        <div className='tab'>changeme</div>
        <button className='CloseButton' onClick={handleClosePlayer}>
        <img src={Close} className='Close'/>
        </button>
      </div>
      <img src={Player} className='Player' />
      <img src={Bar} className='Bar'/>
      <div className='buttons'>
      <button className='Button' onClick={() => onClick('play')}>
        <img src={ButtonPlay} className='MediaButton'/>
      </button>
      <button className='Button' onClick={() => onClick('stop')}>
        <img src={ButtonStop} className='MediaButton'/>
      </button>
      <button className='Button' onClick={() => onClick('pause')}>
        <img src={ButtonPause} className='MediaButton'/>
      </button>
      <button className='Button' onClick={() => onClick('restart')}>
        <img src={ButtonBack} className='MediaButton'/>
      </button>
      <button className='Button' onClick={() => onClick('restart')}>
        <img src={ButtonForward} className='MediaButton'/>
      </button>
      </div>
      <audio ref={audio} src={AudioURL}/>
    </div>
  )
} 

export default MediaPlayer;