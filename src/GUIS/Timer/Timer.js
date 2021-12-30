import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import './Timer.css'

const Timer = () => {
    const [done, setDone] = useState(0);
    let percentage = 0;
    console.log(done)
    let nIntervId;
    function makeProgress(){
        if (!nIntervId) {
            nIntervId = setInterval(progress, 300);
          }
    }
    function progress(){
        if (percentage < 100){
            percentage ++
            setDone(percentage)
        } else{setDone(0)}
    }
    return(
        <>
            <h2>Timer</h2>
            <p>Elapsed time: </p>
            <div className="progress_bar">
                <div className="progress" style={{
                    width: `${done}%`
                }}></div>
            </div>
            <p>Duration: </p>
            <div className="progress_bar">
                <div className="progress"></div>
            </div>
            <button onClick={makeProgress}>Reset Timer</button>
        </>
    )
}

export default Timer