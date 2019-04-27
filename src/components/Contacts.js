import React from 'react'
import SideBar from './SideBar'

export default function Contacts() {
  return (
        <div>
        <div id="msg" style={{"height": "70px"}} ></div>
        <div className="container">
        <div  className="row">
            <div className="col-sm-8 col-md-8">
            <h2>
                Contact Us
            </h2>
              <h3>Headquarter:</h3>
               <h6>Address:</h6> 
               <p>
                    
                    Arab Swiss Engineering Company "ASEC"
                    44L, Al-Gazayer Square, New Maadi, Cairo, Egypt
                    P. O. Box 26 New Maadi, Postal Code: 11742 Cairo, Egypt.</p>
                                    
                <h6>
               Tel:</h6><p>
                    +202 2366 99 00
                </p>
                <h6>
                Fax:</h6>
                <p>
                   +202 2502 32 94 – 95 <br />
                +202 27542796

                </p>
                <h6>
                Email:</h6>
                <p>
                  <a href="mailto:asec@asec-engineering.com">asec@asec-engineering.com</a> <br />
 
                    <a href="mailto:bdd@asec-engineering.com">bdd@asec-engineering.com</a>


                </p>
                <h6>
                Website:</h6>
                <p>
                   <a href="http://asec-engineering.com">www.asec-engineering.com</a>  
 

                </p>
                                                             
                                                    
                                                                                          
                            
             
             <h2>Training Center Contacts:</h2>
                <h6>
                
                Address:</h6>
                <p>
                    &nbsp;&nbsp; Arab Swiss Engineering Company &quot;ASEC&quot; 44L, Al-Gazayer Square, New Maadi, 
                    Cairo, Egypt P. O. Box 26 New Maadi, Postal Code: 11742 Cairo, Egypt.</p>

                <h6>
                Contact Person:</h6>
                <p>
                    
                Mr. Waleed Hamed – Administrator.
                </p>

                <h6>
                Email:</h6>
                <p>
                  <a href="mailto:training@asec-engineering.com">training@asec-engineering.com</a></p>

                <h6>
               Tel:</h6><p>
                    +202 2366 99 28    <br />   
    
                    +202 2366 99 00<br />
                    +2 01223286866</p>

               <h2>Dubai branch:</h2>
                
                <h6>
                
                Address:</h6>
                <p>
                   &nbsp;&nbsp;&nbsp;
                   Dubai- Port Saeed-Business Avenue Building-Suite 619 - PO 48393 Dubai 
                </p>
               
                <h6>Branch Manager:</h6>
                <p>Eng. Hossam Darwish</p><br />
                <h6>Administration and Financial Manager:</h6>
                <p> Mr. Kamal Roushdy </p><br />
                 
                <h6>Tel:</h6>
                <p> +971 557008330 </p> <br />
                 <h6>Email:</h6>
                <p>HDarwish@asec-engineering.com </p>
            
            </div>
            <div className="col-sm-4 col-md-4">
            <SideBar/>
        
            </div>
            
        </div>

        </div>
        </div>
  )
}
