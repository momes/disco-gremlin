
import './App.css';
import mediaIcon from './icon.png';
import startButton from './start.png';
import DiscoGremlinFont from './disco-gremlin.png';
import Misc from './misc.png';
import React, { useEffect, useState } from 'react';
import NotepadIcon from './notepad-icon.png';
import MediaPlayer from './MediaPlayer';
import Notepad from './Notepad';
function App() {
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openNotebook, setOpenNotebook] = useState(false);

  const togglePlayer = () => {
    setOpenPlayer(!openPlayer);
  }

  const toggleNotebook = () => {
    setOpenNotebook(!openNotebook)
  }

  return (
    <div className='AppWrap'>
    <div className="App">
      {openPlayer && <MediaPlayer onClickClose={togglePlayer} />}
          <button
            className='MediaIconButton'
            onClick={togglePlayer}
          >
            <img src={mediaIcon} className="MediaIcon"/>
            <br/>
            <img src={DiscoGremlinFont} className='Label'/>
          </button>
      <div className="footer">
        <div className='bottomBar'>
        <img src={startButton} className='StartButton'/>
        <img src={Misc} className='Misc'/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;


