import React from "react";
 import "./footer.css";


 const Footer=()=>{
     return(
       <>
        
      <div className="footer-container">
      <div className="container1">
      <div className=" ft-container1">
      <h2> title</h2>
        <p> Cargo logistics is one of the world's leading logistics campanies.
            it strong market position lies in the seafreight, airfreight,contract 
            logistics and 
            overland businesses"</p>
        
        </div>
        <div className=" ft1-container1">
        <h4> contact info</h4>
    <br></br>
    <p> Box 3233
    <p> +250780273245</p>
    </p>

    <p> cargologistics@gmail.com</p>
        
        </div>

        </div>
        <div className="container2">
        <div className=" ft1-container2">
        <h6> copyright &copy; 2022 corgo logistics </h6> 
        
        </div>
        <div className=" ft2-container2">
        <div className="navbar-right">
            
            <a href="../">Home</a>
            <a href="../about">About </a>
            <a href="/login">update</a>


            <a href="/signup">services</a>
            <a href="/login">contact</a>
           
    
</div>
        
        </div>

        </div>


        </div>

   </>
            
     )
 }
export default Footer;