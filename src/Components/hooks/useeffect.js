import { useEffect } from "react";


const Useeffectex1=()=>{
    useEffect(()=>{
    
            window.addEventListener("mousemove",mouseTrack);
            return()=>{};
    },[])
    const mouseTrack=(event)=>{
        console.log(event)

    }
    return(
<>
<h2>use effect</h2>
</>
    );
};
export default Useeffectex1;