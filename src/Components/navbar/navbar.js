import { Link,NavLink } from "react-router-dom";
import "./navbar.css"
const Navbars=()=>{
  const linkstyle={margin:10, textDecoration:"none"}
    return(

<nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    {/* Links */}
    <ul className="navbar-nav">
    <li className="nav-item">
       
    <NavLink to={"/"} style={linkstyle}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/setting"} style={linkstyle}>Setting</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/about"} style={linkstyle}>About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/blog"} style={linkstyle}>Blog</NavLink>
      </li>
    </ul>
  </div>
</nav>
);
};
export default Navbars;
