import React from 'react'
import "./tracks.css"
import Dashboard2 from '../views/dashboard2'
const Tracks = () => {
  return (
      <Dashboard2>
         <div className="track-code">
           <input type="text" name = "track"/>
           </div>
        <div className="track">tracking informtion</div>
      </Dashboard2>
    
  )
}

export default Tracks