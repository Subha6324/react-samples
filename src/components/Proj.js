import React,{ useState } from "react"
import './proj.css'
const Proj =() =>{
    const [like,setlike] =useState(100)
    const [comment,setcomment] =useState(0);
    function incrementlike()
    {
        setlike (like+1);
    }
    function incrementcomment()
    {
        setcomment (comment+1);
    }
    return(
        <div>
            <div className="secdiv">
                <h2>day 1 in react</h2>
            </div>
            <div className="mydiv">
                <p>Hard work can help people develop character, motivate themselves, overcome hardships and achieve their goals. Many successful individuals have received or given helpful advice regarding hard work, as their achievements are often the result of their work ethic. Reading others' thoughts on hard work can help you maintain discipline and motivation as you aim to achieve success in your career and life.</p>

            </div>
            <div className="third">
                <p>like:{like}</p>
                <button onClick={incrementlike}>like</button>
                <p>comment:{comment}</p>
                <button onClick={incrementcomment}>comment</button>
            </div>
        </div>
    )
}
export default Proj