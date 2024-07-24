import { fakeappi } from "./Components/data";
import { Customcard } from "./Components/customimage";
import Greeting from "./Components/greeting";


const students=["syam","rupanand","uthej"]
const App =()=> {
  return(
  <div>
  {/* <Customcard data1 = {fakeappi}/> */}
  {
    students.map((eachstudent)=>(<Greeting>
 
   <h4>good morning {eachstudent}</h4>
   <h5>How are you </h5>
   <h4>had your lunchS </h4>
    </Greeting>)
  )}

  </div>
  ); 
}

export default App;