import React, { useState } from 'react';
function Hook(){
    const [cnt,setCnt] = useState(0)// const cnt=0 clickfunction setCnt(0)
    const incrBy =() => {
        setCnt(cnt+1)
    }
   
    return(
        <div>
           <h1>React Hooks</h1> 
           
           <p>Count is {cnt}</p>
           <button onClick={incrBy}>Incr by</button>
           {/*<button onClick={()=>getcount(cnt)}>Count</button> */}
           {/* <button onClick={()=>setCnt(cnt+1)}>Count</button> */}
           {/* <br /> */}
           {/* <input type="text"   onChange={(e)=>setName(e.target.value)} /> */}
        

        </div>
    )
}
export default Hook;