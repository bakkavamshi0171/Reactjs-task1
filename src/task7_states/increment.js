import React, { useState } from "react";


function StateCom(){
    const [count , setCount] = useState(0);
    return(
        <>
            <div style={{textAlign:"center", margin:"50px"}}>
                <button onClick={()=>{setCount(count+1)}} > Add +1</button>
                <button onClick={()=>{setCount(count+5)}}>Add +5</button>
                <button onClick={()=>{setCount(count+10)}}>Add +10</button>
                <h1>Count : {count}</h1>
                <button onClick={()=>{setCount(count-5)}}>subtract -5</button>
                <button onClick={()=>{setCount(count-10)}}>subtract -10</button>
                <button onClick={()=>{setCount(count-1)}}>subtract -1</button>
            </div>
        </>
    )
}
// const 
export default StateCom;