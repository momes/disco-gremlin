
import './App.css';
import mediaIcon from './icon.png';
import startButton from './start.png';
import DiscoGremlinFont from './disco-gremlin.png';
import Misc from './misc.png';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import MediaPlayer from './MediaPlayer';
import Gremlins from './Gremlins';
function App() {
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openGremlins, setOpenGremlins] = useState(false);

  const togglePlayer = () => {
    setOpenPlayer(!openPlayer);
  }

  
  const gremlinOverkill = () => {
    setOpenGremlins(true)
  }

  return (
    <div className='AppWrap'>
    <div className="App">
      {openGremlins && <Gremlins />}
      {openPlayer && <MediaPlayer onClickClose={togglePlayer} onClickQuestion={gremlinOverkill}/>}
          <button
            className='MediaIconButton'
            onClick={togglePlayer}
          >
            <img src={mediaIcon} className="MediaIcon"/>
            <br/>
            <img src={DiscoGremlinFont} className='Label'/>
          </button>
    </div>
      <div className="footer">
        <div className='bottomBar'>
        <img src={startButton} className='StartButton'/>
        <img src={Misc} className='Misc'/>
        </div>
      </div>
    </div>
  );
}

export default App;


