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
            <h3>
              ASEC and Alminya Cement Company continue cooperation for the 9 th
              year; the O&amp;M of Al-Minya Cement, Egypt till 2021
            </h3>
            <span className="badge badge-info">Cairo, October 2018</span>
            <img
              className="img-fluid"
              src="https://i.imgur.com/6OmBi2f.jpg"
              style={{ "margin-bottom": "15px", "margin-top": "15px" }}
            />
            <p>
              CAIRO, EGYPT, Arab Swiss Engineering Company “ASEC”, the leading
              provider of cement plants’ O&M in its homeland Egypt, Middle East
              and Africa, announced today the renewal of its technical
              management agreement with Al-Minya Cement Company for a new term
              till 2021.
            </p>
            <p>
              The state of-the-art- plant located in Upper Egypt, has an
              installed annual capacity of 1.95 Mt of clinker. Since the
              commencement of operation back in 2013, ASEC has been entrusted
              with the plant full technical management with a scope spanning
              plant management, operation, maintenance and optimization. It is
              worth noting that it has also served as the project consultant
              supervising the construction, commissioning and startup.
            </p>
            <p>
              “The extension of Al-Minya Cement O&M contract stands as a
              testament on the successful partnership with our client,”
              commenting the company Managing Director, “Such partnership has
              been served well with our operational excellence and our
              relentless quest for efficiency and process optimization. We
              cherish the awarded trust and we are determined to take our
              success to a new level.”
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
