import React from "react";
import Home from "../view/homepg";
import {Routes,Route} from "react-router-dom";

const Index=()=>{
    return(
        <>
        <Routes>
            <Route exact path ="/" element={<Home/>}></Route>
        </Routes>
        </>
    )
}
export default Index;