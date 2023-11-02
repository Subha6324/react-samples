import { Component } from "react";

class Body1 extends Component{
    constructor(){
        super ();
        this.state={count:0}
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
                <p>
                    count:{this.state.count}
                </p>
                <button onClick={()=> this.increment()}>Increment</button>
                <button onClick={()=> this.decrement()}>Decrement</button>
            </div>
        )
    }
}
export default Body1