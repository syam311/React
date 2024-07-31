import { Link } from "react-router-dom";
import Navbars from "../navbar/navbar";

const Invalidscreen =()=>{
    return(
        <>
        <Navbars/>
        <h3>Invalid screen 404 error</h3>
        <button>
            <Link to={"/"} style={{textDecoration:"none"}}>Go to home </Link>
        </button>
        </>
    )
}
export default Invalidscreen;