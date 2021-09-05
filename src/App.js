import React, { useState } from 'react';

//Components
import Clock from './Clock'

//Hooks
import { useClockFetch } from './hooks/useClockFetch';

function App() {
  //const[state, useState] = useState(currentTime);

  /*const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const currentTime = `${hour}:${minute}:${second}`*/

  return (
    <>
      <Clock />
    </>
  );
}

export default App;
