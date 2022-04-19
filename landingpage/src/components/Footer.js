import React from "react";
import "./footer.css";
import LOGO from "../asset/img/logo-2.png";
const footer=()=>{
    return(
            <>
    <div className="footer">
      <div className="footerbar">
      <div className="footer-logo">
          <img src={LOGO} />
          <h3>Gishushu , City of Kigali</h3>
          <h3>P.O ,BOX 264</h3>
          <h3>Email:info@carglog.com</h3>
          <h3>Kigali,Rwanda</h3>
      </div>
      <div className="footnav">
     <h3>Service</h3>
     <h2>Ocean /Import</h2>
     <h2>Air Import / Export</h2>
     <h2>Land & Household</h2>
      </div>
      <div className="footnav1">
     <h3>AboutUs</h3>
     <h2>Need help</h2>
     <h2>Career</h2>
     <h2>Privacy Policy</h2>
     <h2>Terms and Service</h2>
      </div>
      </div>
      <div className="copy">
          <p>&copy;2022 cargologistic.All Right Reserved</p>
      </div>
    </div>
    </>
    )
}
export default footer;