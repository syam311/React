import { useState } from "react";

const Usestatex =()=>{
    const[login,setLogin]=useState(false)
    const[count,setcount]=useState(0)
    const toolHndlere=()=>{
        setLogin((login)=>!login );
    };
    const incremantHandler =()=>{
        setcount(count+1)
    };
    const decremantHandler=()=>{
        setcount(count-1)
    }
    // const resetHandler=()=>{
    //     setcount()
    // }
    return(
<>
<h1>useState</h1>
{
    login ?<h3>welcome user</h3>:<h3>plz login</h3>
}
<button onClick={toolHndlere}> click me</button>
<button onClick={incremantHandler}>{count}</button>
<button onClick={decremantHandler}>{count}</button>

{/* <button onClick={resetHandler}>Reset</button> */}
</>
);
};
export default Usestatex;