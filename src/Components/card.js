
import "./customimage"
import CustomProgressbar from "./progress";
import { fakeappi } from "./data";

const res = (input) => {
    let num = 100;
    let amount = (input / num) * 100;
    return amount;
  };

const Customcard=(prop)=>{                                                                                                                                                                                             
   return(
<>
<div className="App">
      {fakeappi.map((eachdata) => {
        return (
          <div key={eachdata.id}>
             <h1>{eachdata.id}</h1>
             <h1>{eachdata.name}</h1>
             <h3>{eachdata.category}</h3>
             <h3>{eachdata.description}</h3>
            <image src={eachdata.image}/>

   
          
          </div>
         
        );
      })}
    
    </div>

</>
   )
}
export default Customcard;