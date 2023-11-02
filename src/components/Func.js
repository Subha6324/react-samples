import React,{ useState } from "react"
import './func.css'
const Func = () =>
{
    const [count, setcount] = useState(10)
    function increments()
    {
        setcount(count+1);
    }
    return(
        <div className="div">
            <p> count:{count}</p>
            <button onClick={increments}>Increment</button>
        </div>
    )
} 
export default Func