import React, { useState } from 'react';
//Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Clock from './Clock';
import AnalogClock from './AnalogClock';

const App = () => {
    const[state, setState] = useState();
    const[number, setNumber] = useState(0);

    const date = new Date();
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());

    const secondsRatio = date.getSeconds() / 60;
    const minuteRatio = (secondsRatio + date.getMinutes()) / 60;
    const hourRatio = (minuteRatio + date.getHours()) / 12;

    let time = `${h}:${m}:${s}` 

    setInterval(() => {
        setState(prevState => prevState + time)
    }, 1000)

    function addZero (i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }

    

    /*
    function setClock () {
        setRotation(handSecond, secondsRatio);
        setRotation(handMinute, minuteRatio);
        setRotation(handHour, hourRatio);
    }
    
    function setRotation (element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360)
    }*/

    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Clock time={time} />}/>
                <Route path='/analog-clock' element={<AnalogClock />}/>
            </Routes>
        </Router>
        </>
    )
}

export default App;
