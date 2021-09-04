import React, { useState } from 'react';
//Components
import Clock from './Clock'

function App() {
  const[state, useState] = useState(currentTime);

  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  

  const currentTime = `${hour}:${minute}:${second}`

  return (
    <>
      <Clock time={currentTime}/>
    </>
  );
}

export default App;
