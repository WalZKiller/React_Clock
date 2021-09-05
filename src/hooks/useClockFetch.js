import { useState } from 'react';

export const useClockFetch = () => {

    const [state, setState] = useState(initialTime);

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const initialTime = `${hour}:${minute}:${second}`

    const newTime = () => {
        setState(initialTime)
        setInterval(newTime, 1000)
    }
    
    return { newTime }
}