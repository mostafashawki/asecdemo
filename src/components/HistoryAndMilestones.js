import React from 'react'
import SideBar from './SideBar'

export default function HistoryAndMilestones() {
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
                History And Milestones
            </h3>
            <p>
                Arab Swiss Engineering Company (ASEC) was established on June 5, 1975, as the first joint venture between national Egyptian Cement Company and the Swiss-based Holderbank for Management and Consultancy. It all started with the notion of introducing the advanced know how and technology of the Holderbank group to Egypt. The late Omar Guemei, who represented Holderbank at that time, unleashed the idea and nurtured it from a small office in El Zamalek to a regional leader for plant engineering and consultancy.
            </p>
            
            <p>
                The first assignment for ASEC was engineering for the first dry process line, to be installed in Tourah. ASEC soon was entrusted by many cement plants for providing consultancy and engineering for their lines, conducting raw material investigation and supervising design, construction and projects' start up. In 1987, ASEC signed its first technical assistance contract with Ameriyah Cement Company, while it signed its first technical management contract with a public sector company on May 1996.
            </p>
            
            <p>
                The diversification in ASEC's service portfolio highlighted the need for a more flexible structure for the organization which permits a higher degree of specialization and independence, hence was the establishment of six sister companies in the period between 1989 to 1999 including ARESCO for Casting and Heat Treatment, ASENPRO for Environmental Protection, ASEC Automation, ASCOM for Geology and Mining, ARTEC for Research and Technology and REPELCO for Maintenance and Spare Parts.   
            </p>
            <p>
            Over more than 30 years of operation, ASEC has made a lot of contributions to the national cement industry, hence to the national economy. It has succeeded in delivering a full range of technical services in addition to the specialized training of Egyptian cement specialists. From 1975-2000, ASEC has managed to increase the national cement production in Egypt from 3.5 million to 23c million tons per year, through modernizing old facilities, and by planning and building new ones. ASEC has contributed to adding 18 production lines in 10 cement factories. In the year 2000, ASEC experts were managing nearly 60% of the cement national production.
            </p>
            <ul>
                <li>
                1978: Helwan Portland Cement Company assigns ASEC as consultant for the construction of the two largest production lines in Egypt at that time, each one designed for 4500 tones of clinker per day.
                </li>
                <li>
                1980: The first training centre is set up in the ASEC offices in Cooperation with Holderbank.
                </li>
                <li>
                1986: ASEC signs the first technical assistance contract with the Ameriyah Cement Company taking on the responsibility to operate the plant, produce the designed nominal capacity and maintain the equipment.
                </li>
                <li>
                1989: ASEC founded its first subsidiary company "ARESCO" that started by setting up a heat-treatment plant for grinding media, extending its activities to manufacturing of plant components and construction of complete cement plants.
                </li>
                <li>
                1995: Establishing ASENPRO for environmental protection as the second subsidiary for ASEC.
                </li>
                <li>
                1996: For the first time in Egypt, two public sector companies (Tourah and National) signed the first Technical Management contract with a private company. The Tourah contract included the upgrading of lines 8 and 9 to 4200 tpd each, on a turnkey basis.
                </li>
                <li>
                1997: ASEC Automation was founded, providing specialized services for the industry, from project studies to designing, erection, supply and commissioning of electrical and control systems on a turnkey basis.
                </li>
                <li>
                1998: ASEC forms the group that contracts the first turnkey project for a new grey cement plant with the Sinai cement company.
                </li>
                <li>
                1999: ASEC founds two new companies: ASCOM Geology and Mining and ARTEC Research and Technology.
                </li>
                <li>
                2000: Acquisition of Helwan Cement Plant.
                </li>
                <li>
                2004: Acquisition of ASEC by Citadel Capital.
                </li>
                <li>
                2006: Establishment of ASEC Holding.
                </li>
                <li>
                2008: First T. A contract abroad – Qatrana Cement Company, Jordan.
                </li>
                <li>
                2009: First T.M. contract abroad – Al-Takamol Cement Company, Sudan.
                </li>
                <li>
                2011: Opening of ASEC branch in Dubai.
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
