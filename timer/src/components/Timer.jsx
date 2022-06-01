import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Timer = () => {
    const [timer,setTimer]=useState(10);

    useEffect(()=>{
        let id = setInterval(() => {
            if (timer>100){
                clearInterval(id);
            }
            else{
                setTimer(timer+1);
            }
           
        },10000);

        return() =>{
            clearInterval(id);
        };
    }, []);

  return (
    <div>Count Down: {timer}</div>
  );
  
};

export default Timer;