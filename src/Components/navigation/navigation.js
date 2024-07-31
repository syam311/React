import { BrowserRouter, Route, Routes } from "react-router-dom"
 import Settingscreen from "../screens/settingscreen"
import Aboutscreen from "../screens/aboutscreen"
import Blogscreen from "../screens/blogscreen"
import Homescreen from "../screens/homescreen"
import Invalidscreen from "../screens/invalidscreen"
import Userscreen from "../screens/userscreen"

const  Navigations=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homescreen/>}/>
            <Route path="/about" element={<Aboutscreen/>}/>
            <Route path="/setting" element={<Settingscreen/>}/>
            <Route path="/blog" element={<Blogscreen/>}/>
            <Route path="*" element={<Invalidscreen/>}/>
            <Route path="user" element={<Userscreen/>}/>
            <Route path="user/admin" element={<Userscreen/>}/>
        </Routes>
        </BrowserRouter>
    );
};
export default Navigations;

