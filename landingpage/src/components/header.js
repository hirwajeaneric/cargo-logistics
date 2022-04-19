import React from "react";
import logo from "../asset/img/logo-1.png";
import "./header.css";
import {SearchOutlined,TwitterOutlined,YoutubeOutlined,InstagramOutlined,FacebookOutlined} from "@ant-design/icons";
import "antd/dist/antd.css"



const Header=()=>{
    return (
        <div className="header">
            <div className="navbar">
            <div className="nav-logo-left">
          <img src={logo} />
        </div>
        <div class='topnav'>
            <a href='*'>ContactUs</a>
            <a href='*'>AboutUs</a>
            <a href=''>Service</a>
            <a href=''>Home</a>
        </div>
        <div className="search">
        <SearchOutlined />
        </div>
        <div className="login">
            <a href='*'>Login</a>
            <a href='*'>SignUp</a>
        </div>
         
           <div className="icon1">
           <TwitterOutlined />
           </div>
           <div className="icon2">
           <YoutubeOutlined />
           </div>
           <div className="icon3">
            <InstagramOutlined /> 
           </div>
           <div className="icon4">
            < FacebookOutlined/> 
           </div>
             
            </div>
        </div>

    )
}
export default Header  