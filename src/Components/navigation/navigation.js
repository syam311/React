import { Route, Routes } from "react-router-dom";
import Settingscreen from "../screens/settingscreen";
import Aboutscreen from "../screens/aboutscreen";
import Blogscreen from "../screens/blogscreen";
import Homescreen from "../screens/homescreen";
import Invalidscreen from "../screens/invalidscreen";
import Userscreen from "../screens/userscreen";
import Recipescreen from "../screens/Recipe screen";

const Navigations = () => {
  return (
   
      <Routes>
        <Route path="/home" element={<Homescreen />} />
        <Route path="/about" element={<Aboutscreen />} />
        <Route path="/setting" element={<Settingscreen />} />
        <Route path="/blog" element={<Blogscreen />} />
        <Route path="/user" element={<Userscreen />} />
        <Route path="/user/admin" element={<Userscreen />} />
        <Route path="/recipe" element={<Recipescreen/>} />
        <Route path="*" element={<Invalidscreen />} />
      </Routes>
 
  );
};

export default Navigations;
