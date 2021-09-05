import React, { useState } from 'react';

//Components
import Clock from './Clock'

function App() {
    const[state, setState] = useState();

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = addZero(date.getSeconds());

    let time = `${h}:${m}:${s}`    

    function addZero (i) {
        if (i < 10) {
            i = "0" + 1
        }
        return i
    }

    setInterval(() => {
        setState(prevState => prevState + time)
    }, 1000)
    

    return (
        <>
            <Clock time={time} />
            
        </>
    )
}

export default App;
