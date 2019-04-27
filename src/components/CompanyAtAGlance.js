import React from 'react'
import SideBar from './SideBar'

export default function CompanyAtAGlance() {
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
                Company At a Glance
            </h3>
            <p>
                Since foundation in 1975, ASEC for Engineering and Management has been providing cement industry with broad range of services ranging from engineering and consultancy services before and during construction, technical assistance and up to full plant technical management and operation. In addition, ASEC for Engineering and Management provides specialized services including production optimization, upgrading projects, maintenance and material testing and certification. ASEC Training Center is a fundamental source for cement technology training in the MENA region.
            </p>
            
            <p>
                Being entrusted by local and international cement producers, ASEC for Engineering and management is currently operating and managing one third of the national cement production via technical management contracts and is well positioned as the regional market leader in plant engineering, consulting, operation and management. In collaboration with ASEC Group sister companies, ASEC is presenting even a more integrated service portfolio with the capacity of plant turnkey delivery.
            </p>
            
            <p>
                Capitalizing on its extensive expertise and valuable growing human asset, ASEC is steadily moving towards the emerging markets in Africa and the Middle East providing full technical assistance and integrated project management, in addition to turnkey project delivery.   
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
