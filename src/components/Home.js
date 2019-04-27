import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <Header/>
      <div id="msg" style={{"height": "50px"}} ></div>
      {/* <br /> */}
      <div className="container">
        <div  className="row">
            <div className="col-sm-8 col-md-8">
            <h2>
                <i className="fas fa-comment" /> Welcome Message
            </h2>
            <p>
                It gives us pleasure to welcome you to the website of asec for Engineering and Management, the leading company in cement plants’ consultancy, engineering and management services in the MENA region.
            </p>
            <p>
                Since 1975, we have been providing a growing portfolio of services ranging from performing feasibility studies until plant operation and technical management. asec is currently managing 8 cement plants producing 30% of the yearly national cement production and managing a cement plant in Jordan and an alternative fuel preparation plant in UAE.
            </p>
            <p>
                Numerous success stories with clients stand as proof of our ability to create a long-term win-win relationship. Our people, extensive know-how and reputation compose our success formula.
            </p>
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                    <h3>
                        {/* <i className="fas fa-graduation-cap" /> ASEC Academy */}
                        <img className="img-fluid" style={{width:"25%"}} src="https://i.imgur.com/3V4VtIX.png" />
                    </h3>
                    <p>
                        Ever since its birth, ASEC has been seamlessly integrated with its customers, where knowledge and experience transfer represented a crucial part of every project; human resources training has been an inherent mission to all services offered to customers and hence was the establishment of asec training Centre in 1980. Backed with more thirty years of success in studying, constructing and operating of more than 24 cement production lines, asec represents an unrivalled source for cement experience which is drawn from real life problem. Besides specialized technical training on cement industry, asec Training Centre provides professional and tailor-made training courses. <a href="http://acad.asec-engineering.com/" target="_blank">Learn More <i class="fas fa-external-link-alt"></i></a>
                    </p>
                    </div>
                    <div className="col-sm-6 col-md-6">
                    <h3>
                    <i className="far fa-lightbulb"></i> 2018 Key Highlights
                    </h3>
                    <p>
                    2018 has been an interesting year full of challenges and achievements for us in ASEC. We would like to thank all of our stakeholders for their unparalleled support and contributions throughout the year.
                    <Link to="/news/key-highlights-2018">Please join us in exploring our key highlights for 2018</Link>
                    </p>
                    </div>
                    <div className="col-sm-4 col-md-4">
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-md-4">
            <SideBar/>
           
            </div>
        </div>
        {/* <div className="row">
            <div className="col-sm-4 col-md-4">
            <h3>
                <i className="fas fa-graduation-cap" /> ASEC Academy
            </h3>
            <p>
                Ever since its birth, ASEC has been seamlessly integrated with its customers, where knowledge and experience transfer represented a crucial part of every project; human resources training has been an inherent mission to all services offered to customers and hence was the establishment of asec training Centre in 1980. Backed with more thirty years of success in studying, constructing and operating of more than 24 cement production lines, asec represents an unrivalled source for cement experience which is drawn from real life problem. Besides specialized technical training on cement industry, asec Training Centre provides professional and tailor-made training courses. <a href="http://acad.asec-engineering.com/" target="_blank">Learn More <i class="fas fa-external-link-alt"></i></a>
            </p>
            </div>
            <div className="col-sm-4 col-md-4">
            <h3>
                <i className="fas fa-vials" /> ASEC Central Lab
            </h3>
            <p>
                ASEC Central Laboratory has been established in 1976 as a subordinate economic service unit to Arab Swiss Engineering Company (asec). The lab is specialized in carrying out all the suitability analysis and testing experiences for raw and processed building materials, water and soil as well as inspection and calibration of laboratory instruments. The lab is currently providing a large group of services to different industries including cement and building material, ceramics, sanitary projects and infrastructure projects.
            </p>
            </div>
            <div className="col-sm-4 col-md-4">
            </div>
        </div> */}
        </div>

    </div>
  )
}
