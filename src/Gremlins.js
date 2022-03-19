import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import './Gremlins.css'; 
import Gremlin from './gremlin.GIF';

function Gremlins() {
  const MAX_GREMLIN_COUNT = 15;
  const GremlinList = []
  for (let i=0; i < MAX_GREMLIN_COUNT - 1; i++) {
    GremlinList.push(i);
  }
  console.log("got here")
  return (
    <>
    {GremlinList.map((g) => {
      let  randLeft = (Math.floor(Math.random() * 5) *20 ) -25;
      let randTop = (Math.floor(Math.random() * 5)*20) - 25;
      let randHeight = (Math.floor(Math.random() * 5) *100) +100;
      let delay = g * 300
     return ( <img className='Gremlins' 
      src={Gremlin}
      style={{
                  left: `${randLeft}%`,
                  top: `${randTop}%`,
                  height: `${randHeight}px`,
                  zIndex: `${30 + g}`,
                  animation: `cssAnimation 0ms ${delay}ms forwards`,
                  visibility:' hidden'
                }} 
    />)
              }
    )}
    </>
  )} 

export default Gremlins;