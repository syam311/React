import CustomButton from "./button";
import "./card.css";

const Card =()=>{
    return(
        <div className="card">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  
        alt="" 
        height={100} 
        width={100}/>
        <h3>price 200</h3>
        <CustomButton text="see more"/>
        </div>
    );
};

export default Card;



