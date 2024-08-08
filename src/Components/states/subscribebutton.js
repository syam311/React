import { Component } from "react";
import Customcard from "../card";


class Subscribebutton extends Component{
// state creation
state={
    issubscribe:false,
    text1:"subscribe",
    text2:"subscribed"
};
handleClick=()=>{
this.setState({
    issubscribe:!this.setState.issubscribe,
},()=>{})    
}
    render(){
        return(
        <>
        <button onClick={this.handleClick}>
            {this.state.issubscribe?this.state.text2:this.state.text1}
            </button>
           {
            this.state.issubscribe ?
                <>
                <h1>tnx for subcrebtion </h1>
                <h1> here is the imformation about our prodects</h1>
            <Customcard/>
                </>:
                <>
                <h2>plz subcribe to get our prodects</h2>
                </>
            
        }
        </>

    
        ) 
}
}
export default Subscribebutton;





