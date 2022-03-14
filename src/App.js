
import './App.css';
import mediaIcon from './icon.png';
import startButton from './start.png';
import DiscoGremlinFont from './disco-gremlin.png';
import Misc from './misc.png';
import React, { useState } from 'react';
import DragMove from "./DragMove";
import MediaPlayer from './MediaPlayer';
function App() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });
  const [openPlayer, setOpenPlayer] = useState(false);

  const togglePlayer = () => {
    console.log('clicked');
    setOpenPlayer(!openPlayer);
  }

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  return (
    <div className="App">
      {openPlayer && <MediaPlayer onClickClose={togglePlayer} />}
      <DragMove onDragMove={handleDragMove}>
          <button
            className='MediaIconButton'
            onClick={togglePlayer}
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
            }}
          >
            <img src={mediaIcon} className="MediaIcon"/>
            <br/>
            <img src={DiscoGremlinFont} className='Label'/>
          </button>
        </DragMove>
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


