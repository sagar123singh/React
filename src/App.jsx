import React, { useState } from "react";




const App=()=>{


//const state=useState(5)
//console.log(state);

const [count,setCount]=useState(0)

const IncNum=()=>{
    setCount(count + 5)
//console.log("clicked "+  count++);
};



    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    );
};
export default App;