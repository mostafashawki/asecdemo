import React from 'react'
import SideBar from './SideBar'

export default function VisionAndMission() {
  return (
    <div>
        <div id="msg" style={{"height": "70px"}} ></div>
      <div className="container">
        <div  className="row">
            <div className="col-sm-8 col-md-8">
            <h2>
                Company Profile
            </h2>
            <h3>
                Our Vision
            </h3>
            <p>
                Be recognized as the most efficient facilities manager and engineering company in the cement industry in Egypt, Africa and the Middle East markets, providing leadership in environmental practices, in ethical standards, in employment practices, as a corporate citizen and with a robust return on equity.
            </p>
            <h3>
                Our Mission
            </h3>
            <p>
                Efficient management of cement production facilities, providing technical management, technical assistance and consultancy, meeting all production commitments at the highest efficiency levels of the facility.
            </p>
            
            </div>
            <div className="col-sm-4 col-md-4">
            <SideBar/>
           
            </div>
        </div>
       
        </div>
    </div>
  )
}
