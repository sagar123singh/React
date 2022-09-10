/*
local time

import React, { useState } from 'react';

const App=()=>{
 
    let newTime= new Date().toLocaleTimeString()

    let [ctime ,setCtime] =useState(newTime);

    const updateTime=()=>{
        newTime= new Date().toLocaleTimeString();
        setCtime(newTime);
    };

    return (
        <>
            <h1> {ctime}</h1>
            <button onClick={updateTime}> get time</button>
        </>
    );
}
export default App;
*/



///                   digital clock

import React, { useState } from "react";

const App=()=>{
    let Time=new Date().toLocaleTimeString();

    const [ctime,setCtime]=useState(Time)

    const updateTime=()=>{
        Time=new Date().toLocaleTimeString();
        setCtime(Time)
    }
        setInterval(updateTime, 1000);
    return(
        <>
            <h1> Digital Watch</h1>
        
            <h2>{ctime}</h2>,
            
                </>
    )
}
export default App;