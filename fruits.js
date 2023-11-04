import { useState } from "react";
function Fruits(){
    const [light,wiring] = useState(false)
    return(
        <div>
            <button onClick={()=>wiring(true)}>on</button>
            <button onClick={()=>wiring(false)}>off</button>
            <br/>
            (
                light===false? <img src="lightoff.jpg"/> : <img src="light.jpg" />
            )
        </div>
    )
}
export default Fruits;