import { Component } from "react";

class Fetch extends Component{
    state={
        products:[],
        loader:true,
        error:false,
    };
    fetchproducts=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data) => this.setState({products:data,loader:false}));
        9 
    };
    render(){
        return(<div>
            <button onClick={this.fetchproducts}>fetch data</button>
            {
               this.state.loader ? 
               <h1>plz wait.....</h1>
               :
               <>
            {
                this.state.products.map((each)=>{
                    return (
                        <div>
                            <h2>{each.title}</h2>
                        </div>
                    )
                })
            }
            </>
    }
            </div>
            
        )
    }
}
export default Fetch;