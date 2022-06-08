import React from "react";
import"./header.css"

   

const Header =() =>{
    return(
        
         <div className="header_container">
             <div className= "logo">

             </div>
             <nav className="">
              <div className="headerlink"> 
                <ul className="">
                
                
                 <a href="../">Home</a>
                 <a href="/TrackPage">Track</a>
                 <a href="/AboutUs"> About</a>
                 <a href="/contactUs">Contact</a>
                 
         
                </ul>
                </div>
             
             </nav>
         
            </div>
    )
}
export default Header;