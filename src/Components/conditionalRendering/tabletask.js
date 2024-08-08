import axios from "axios"
import { useEffect } from "react"
import { Table } from "react-bootstrap"




const Apitable=()=>{
    useEffect(()=>{
        Apicall()

    },[])




    const Apicall=async()=>{
        const Fackapi=await axios.get("https://fakestoreapi.com/products")
        
       console.log(Fackapi);
       
    }

    return(
<>
<Table striped bordered hover>
      <thead>
        
        <tr>
          <th> </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
       
      </tbody>
    </Table>

</>
    )

}




export default Apitable;


