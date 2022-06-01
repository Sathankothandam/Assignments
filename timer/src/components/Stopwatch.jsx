import React from 'react';
import { useEffect } from 'react';
import { useState , useRef} from 'react';

const Stopwatch = () => {

    const [timerId,setTimerId] =useRef(null);
    const [watch,setWatch] =useState(0);
  
    const start = () =>{
        if(!timerId.current){
        let id = setInterval(()=>{
            setWatch((prev)=> prev+1)
        },300)
        timerId.current = null;
        }
    };
    const pause = () =>{
        clearInterval(timerId.current);
        setTimerId(null)
    };

    const reset = () =>{
        clearInterval(timerId);
        setWatch(0);
        setTimerId(null);
    };
    useEffect(()=>{
        return reset;
    },[])

    return (
    <div >
        <h2>Stopwatch</h2>
        <h1>{watch}</h1>
        <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch;