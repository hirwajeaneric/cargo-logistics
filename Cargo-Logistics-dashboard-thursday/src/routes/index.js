import React from "react";
import Home from "../views/home";
// import ContactUs from  "../views/contact"
import TrackPage from "../views/track";
import AboutUs from "../views/about";
import Userdashboard from "../views/dashboard";
import Dashboard2 from "../views/dashboard2";
import Allshipment from "../components/allshipment";
import Addshipment from "../components/addshipment";
import Product from "../components/product";
import Employer from "../components/employer";
import Customer from "../components/customer";
import Chart from "../components/chart";
// end user pages
import Odering from "../components/ship_odering";
import Tracks from "../components/tracks";
import SignIn from "../views/signin"
import SignUp from "../views/signup"


import { Routes , Route } from "react-router-dom"; 
const Index = () => {
  
      return(
      <Routes>
       
        <Route exact path="/" element={<Home />}></Route>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route exact path="/Contactus" element={<ContactUs/>}></Route>*/}
        <Route path="/TrackPage" element={<TrackPage/>}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route> 
        <Route path="/userdash" element={<Userdashboard />}></Route>
        <Route path="/dash2" element={<Dashboard2 />}></Route>
        {/* admin pages */}
        <Route path="/allship" element={<Allshipment />}></Route>
        <Route path="/addship" element={<Addshipment/>}></Route> 
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/employer" element={<Employer/>}></Route>
        <Route path="/customer" element={<Customer/>}></Route>
        <Route path="/chart" element={<Chart/>}></Route>

         {/* end-user pages */}
         <Route path="/order" element={<Odering/>}></Route>
         <Route path="/tracks" element={<Tracks/>}></Route>
         

        
        
    

        

           
    </Routes>
  );
};
export default Index;