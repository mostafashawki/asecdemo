import React from "react";
import SideBar from "../../SideBar";

export default function Alminya() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>News</h2>
            <h3>ASEC Addresses Vibration Control at CEMTECH MEA 2019</h3>
            <span className="badge badge-info">Cairo, February 2019</span>
            <img
              className="img-fluid"
              src="https://i.imgur.com/GGmhc8t.jpg"
              style={{ "margin-bottom": "15px", "margin-top": "15px" }}
            />
            <p>
              More than 200 delegates and 25 exhibitors participated in “CEMTECH
              Middle East and Africa 2019” conference and exhibition taking
              place in Dubai from 17 – 20 February. The conference tackled the
              oversupply issue and possible business and operational solutions,
              in addition to sharing the latest technological innovation and
              best practice in the cement manufacturing process.
            </p>
            <p>
              ASEC, as a leading O&M provider in the MEA region, contributed to
              this year’s conference by a technical case study titled “Cement
              Mill Vibration – Monitor and Control”, addressing the challenges
              encountered by plant operators with commissioning faults,
              particularly high vibration in cement tube mills. The paper
              further explored advanced measurement methods for equipment
              vibration, and multiple attempts for controlling the vibration,
              but above all else agility in scheduling repair shutdowns to
              balance out between reliable plant operation and business
              priorities. The paper was well-received by the conference
              participants for it presented a practical and agile approach to
              equipment maintenance.
            </p>
            <p>
              ASEC’s presence in the exhibition has been equally outstanding and
              rendered an excellent opportunity for meeting industry
              professionals to deliberate potential cooperation and to share
              knowledge about latest technological breakthroughs.
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
