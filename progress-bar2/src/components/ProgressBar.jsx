import React, { useEffect, useState } from 'react'
import "./ProgressBar.css"
import { MAX, MIN, INTERVAL } from '../constants';

const ProgressBar = ({value=0, onComplete=()=>{}}) => {
    const [progress, setProgress]=useState(Math.floor(value));
   

    useEffect(()=>{
     let timerInterval= setInterval(()=>{
         setProgress((prev)=>{
            if(prev>=100){
                clearInterval(timerInterval);
                return prev;
            }
            return Math.min(prev+1,MAX);
         });
         console.log("SetInterval getting called");
      },INTERVAL);

      return ()=> clearInterval(timerInterval);

    },[])

    
  return (
    <>
    <div className="outer-container">  
        <span className='progressSpan' style={{color: progress < 49 ? "black": "white",}}>{progress}%</span>
        <div className="inner-container"
         style={{transform: `scaleX(${progress/MAX})`, transformOrigin:"left",}}

         role="progressbar"
         aria-valuemin = {MIN}
         aria-valuemax={MAX}
         aria-valuenow={progress}         
         
         >
        </div>
    </div>
    
    </>
  )
}

export default ProgressBar