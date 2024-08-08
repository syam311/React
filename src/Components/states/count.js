import { Component } from "react";

class Count extends Component{
    state={
        count:10,
    };
    incremantHandler=()=>{
        this.setState({
            count:this.state.count+1,
        },()=>{})
    }
        decremantHandler=()=>{
            this.setState({
                count:this.state.count-1,
            },()=>{})
    
    }
    resetHandler=()=>{
        this.setState({
            count:10,
        },()=>{})
    }
    render (){
        return(
            <>
           
            <h4>{this.state.count} is u'r count</h4>
            <button onClick={this.incremantHandler}>+</button>
            <button onClick={this.decremantHandler}>-</button>
            <button onClick={this.resetHandler}>Reset</button>
            </>
        )
    }
}
export default Count;