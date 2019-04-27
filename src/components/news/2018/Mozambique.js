import React from "react";
import SideBar from "../../SideBar";

export default function Mozambique() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>News</h2>
            <h3>
              ASEC Engineering Signs Plant Management Agreement in Mozambique.
            </h3>
            {/* <span className="badge badge-info">Cairo, 15 January 2018</span> */}
            <p>
              ASEC Engineering and Management, the leading Cement Plant O&M
              service provider in Egypt and MENA region has signed a contract
              with Cimento Nacionale Ltda for the Operation and Maintenance of
              its Cement production plant near the city of Maputo the Capital of
              Mozambique. Cimento Nacionale Ltda is the second largest producer
              of cement in Mozambique.
            </p>
            <p>
              The objective of the contract is for ASEC Engineering to utilize
              its knowhow and expertise to assist Cimento Nationale Ltda to
              increase the production volumes, reduce the production cost, and
              improve the product quality. ASEC Engineering is also to introduce
              and implement professional systems for all aspects of production,
              quality, maintenance, warehousing, HR, etc… In addition to that
              ASEC's scope covers extensive training for the local Mozambican
              staff through the prestigious "ASEC Academy" training programs and
              courses.
            </p>
            <p>
              The contract covers a period of one year of operation and
              maintenance of the cement production facility and is foreseen to
              be extended for a further 5 years after the conclusion of the
              first year.
            </p>
            <p>
              ASEC Engineering is already operating and maintaining 10 cement
              production lines within Egypt that is accountable for around 25%
              of the combined Egyptian Cement production. ASEC Engineering is
              also engaged in various other operations around the region. “This
              contract with Cimento Nacionale Ltda is the first fruit of ASEC
              Engineering ambitious plans to expand its business territory into
              Sub-Saharan Africa. It is also a fruit of the already strong
              long-standing position of ASEC Group on the Egyptian, Arabian and
              North African markets". Mr. Khaled El Sebaie the CEO of ASEC
              commented.
            </p>
          </div>
          <div className="col-sm-4 col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
