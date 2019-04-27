import React from "react";
import SideBar from "../../SideBar";

export default function BMIC() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>News</h2>
            <h3>
              Successful Commissioning of Coal Mill in BMIC, Egypt, under ASEC’s
              Consultancy
            </h3>
            <span className="badge badge-info">Cairo, December 2018</span>
            <img
              className="img-fluid"
              src="https://i.imgur.com/6oMmlLW.jpg"
              style={{ "margin-bottom": "15px", "margin-top": "15px" }}
            />
            <p>
              ASEC’s consultancy division announced the completion of the
              performance guarantee tests “PGT” of the newly installed coal mill
              in Building Materials Industries Company’s plant in Assiut, with
              all guarantee figures successfully met and with a record of power
              consumption rate for the Gebr. Pfeiffer vertical roller mill type
              MPS 2800 BK. As the project’s consultant, ASEC’s scope comprised
              commissioning, start-up and carrying out Performance Guarantee
              Tests (PGT), in addition to acting on behalf of the client to
              ensure project construction and installation came in accordance
              with the agreed drawings and technical specifications.
            </p>
            <p>
              The cooperation between ASEC and the contracting Consortium led by
              Gebr. Pfeiffer SE- Germany, and the consortium members Gebr.
              Pfeiffer Egypt and IMSAT, has been outstanding throughout 13
              impressive months. The shared commitment to quality and timeliness
              has enabled delivering the coal conversion project in line with
              the contractual schedules and specifications.
            </p>
            <p>
              ASEC extends appreciation to its business partners and esteemed
              client for the great achievement, which shall certainly add a new
              milestone to its prestigious consultancy record.
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
