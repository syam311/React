
import "./customimage"
import CustomProgressbar from "./progress";

const res = (input) => {
    let num = 100;
    let amount = (input / num) * 100;
    return amount;
  };

const Customcard=(prop)=>{                                                                                                                                                                                             
    const{id,title,price,description,category,image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}=prop
    return<div className="img">
    <img src={image}/>
    <p>id:{id}</p>
    <p>title:{title}</p>
    <p>price:{price}</p>
    <p>description:{description}</p>
    <p>category:{category}</p>
    <CustomProgressbar scale={res(price)}></CustomProgressbar>
    </div>
}
export default Customcard;