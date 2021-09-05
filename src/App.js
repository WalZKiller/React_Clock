import React, { useState } from 'react';
//Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Clock from './Clock';
import AnalogClock from './AnalogClock';

const App = () => {
    const[state, setState] = useState();
    const[ampm, setAmpm] = useState('')

    const date = new Date();
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());

    let time = `${h}:${m}:${s}`    

    function addZero (i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }

    setInterval(() => {
        setState(prevState => prevState + time)
    }, 1000)
    
    function rotateAnalog(number, rotation) {
        
    }

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
