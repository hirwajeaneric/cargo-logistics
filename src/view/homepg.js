import React from "react";
import Homelayout from "../components/homelayout"
//import Header from "../components/header"
import "../components/homelayout.css";
//import Nav from "../components/nav"

const Home=()=>{
    return(
        <div className="home-page">
             <Homelayout>
             <div className="home-card">

             <h1>Welcome to </h1> 
             <h4> Cargo Logistics</h4>
             <p>Global turnkey logistics and transportation<br/>
                service via sea ,land and air .We will protect<br/>
                you from risk and liability
                </p>
             </div>
             <div className="buto1">
             <button className="button"><a href="#">Get a full Quote </a></button>
             </div>
             
            
             </Homelayout>

        </div>
       
    )
}
export default  Home;

