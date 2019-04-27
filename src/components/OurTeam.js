import React from 'react'
import SideBar from './SideBar'

export default function OurTeam() {
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
                Our Team
            </h3>
            <ul>
                <li>
                Eng. Khaled El-Sebaie – Managing Director
                </li>
                <li>
                Mr. Mohamed El-Sayed – General Manager
                </li>
                <li>
                Eng. Mohamed Ibrahim Soliman – Operations Director
                </li>
                <li>
                Eng. Hossam Darwish- Strategic Planning Director
                </li>
                <li>
                Eng. Hesham Al-Dahhan – Consultancy Director
                </li>
                <li>
                Eng. Mohamed El-Feil – Engineering Director
                </li>
                <li>
                Eng. Wasseem Abdalla – Business Development Director
                </li>
                <li>
                Eng. Samir Khafagui – Technical Development Director
                </li>
                <li>
                Eng. Yasser Sobhy – Procurement Director
                </li>
                <li>
                Mr. Tarek Abdel Aziz – Chief Financial Officer
                </li>
                <li>
                Mr. Hazem Yehia – Human Resources Director
                </li>
                <li>
                Mr. Mahmdouh Abdel Khalek – Legal Affairs Director
                </li>
                <li>
                Mrs. Aliaa Abou Shady – Corporate Communication Manager
                </li>
            </ul>
            
            </div>
            <div className="col-sm-4 col-md-4">
            <SideBar/>
        
            </div>
           
        </div>

        </div>
        </div>
  )
}
