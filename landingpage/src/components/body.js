import React from "react";
import Boot from '../asset/img/boot.png';
import Air from '../asset/img/air.png'
import Land from'../asset/img/land.jpg'
import "./body.css";



const Body =()=>{
    return(
      <>
        <div className="service_body">
          <h1 style={{textAlign:"center",color:'black',fontSize:"30px"}}>Services</h1> 
        <div class="gallery">
  <a target="_blank" href="boot.png">
    < img src={Boot} alt="boot" width="600px" height="400px"/>
  </a> 
  <div class="desc"> <h2>Ocean Import / Export </h2><p>Experience the depth  of knowledge<br/> from experts across all areas of yoga </p></div>
  <button className="button"><a href="#">Get a full Quote </a></button>
</div>

<div class="gallery">
  <a target="_blank" hef="air.png">
    <img src={Air} alt="air" width="400px" height="100px"/>
  </a>
  <div class="desc"><h2>Air Import / Export </h2><p>Explore hundreds of live & on demand <br/>classes , with new content added daily</p></div>
  <button className="button"><a href="#">Get a full Quote </a></button>
</div>

<div class="gallery">
  <a target="_blank" href="land.jpg">
    <img src={Land} alt="land" width="600px" height="400px"/>
  </a>
  <div class="desc"><h2>Land & Household</h2><p>Take classes at your own pace<br/> ,on your own time , and on any device</p></div>
  <button className="button"><a href="#">Get a full Quote </a></button>
</div>

        </div>

      </>
    )
}
export default Body;