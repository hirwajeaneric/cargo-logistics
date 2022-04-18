import React from "react";
import "./homelayout.css";
import Footer from"./Footer";
import Header from "../components/header";
//import Nav from "../components/nav"
import Body from "./body";
const Homelayout = ({ children }) => {
    return (
        <div className="home-container">
          
            <div style={{minHeight: "100vh"}}>
             <Header/>
        
            {children}
            
            </div>
            <Body/>
           <Footer/>
            

        </div>
    )
}
export default Homelayout;
