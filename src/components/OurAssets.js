import React from 'react'
import SideBar from './SideBar'

export default function OurAssets() {
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
                Our Assets
            </h3>
            <h4>People</h4>
            <p>
                Our people are our real core competency. Our philosophy is to turn every technician and engineer into a consultant in his own area. ASEC currently has a wealth made up of more than 3000 engineer, chemist and technician, all well-selected and trained to perform to the highest quality and dedication. We continuously invest in our people through devising the appropriate technical and interpersonal training and ensuring employee satisfaction and belonging to ASEC.
            </p>
            <h4>Know How</h4>
            <p>
                ASEC existed to introduce advanced know how to the national cement industry. Ever since, its strategy was to accumulate technical expertise and develop extensive knowledge of different equipment suppliers to remain the regional source and provider of cement technology know how. ASEC is presenting its valuable expertise to both clients and trainees through its specialized training center.
            </p>
            <h4>Value Creation</h4>
            <p>
                ASEC views the relation with its clients as a lifetime partnership, thus it continuously develops its service portfolio to satisfy the client needs and ensures a win-win situation and ensures value creation through enabling its clients the following benefits:
            </p>
                <ul>
                    <li>
                        Getting the full range of cement services through a single contact point.
                    </li>
                    <li>
                        Ensuring the desired return on investments through intensive and rigorous studies. 
                    </li>
                    <li>
                        Commissioning a cost-efficient and safe upgrading of production capacity. 
                    </li>
                    <li>
                        Fostering personnel performance through professional and specialized training. 
                    </li>
                    <li>
                        Optimizing operation plans and systems through plant technical management. 
                    </li>
                    <li>
                        Guaranteed quality of final product through concrete testing and quality assurance systems.
                    </li>
                </ul>
            
            <h4>Quality Assurance</h4>
            <p>
                ASEC has succeeded to build a corporate culture of quality through its continuous abidance by international quality standards. This unwavering commitment to quality at all service areas, has positioned the company well for competing across the borders with international rivals. In August 2007, ASEC Central laboratory was the first in the region to be accredited by EGAC in compliance with the requirements of ISO/IEC17025:2005 in the field of Physical, Chemical and Mechanical Testing for all Types of Cement except Refractory Cement.
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
