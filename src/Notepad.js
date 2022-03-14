import React, { useState, useEffect, useRef } from 'react';
import './Notepad.css'; 
import Close from './close.png';
import Player from './player.png';
import ButtonPlay from './button-play.png';
import ButtonStop from './button-stop.png';
import ButtonPause from './button-pause.png';
import ButtonForward from './button-forward.png';
import ButtonBack from './button-back.png';
import Bar from './bar.png';
import AudioURL from './disco_gremlins_01.mp3';
import NotepadImage from './notepad.png';
import Gremlin from './gremlin.jpeg';

function Notepad({onClickClose}) {
  const [isPlaying, toggleIsPlaying] = useState(true);
  const audio = useRef()

  const handleCloseNotepad = () => {
    onClickClose();
  }

  return (
    <div className='Notepad'>
      <button className='Notepad-Button' onClick={handleCloseNotepad}/>
      <img src={Gremlin} className='Gremlin' />
      <img src={NotepadImage} className='Notepad-bg'/>
    </div>
    
  )
} 

export default Notepad;