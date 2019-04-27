import React from "react";
import SideBar from "../../SideBar";

export default function Kar() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>News</h2>
            <h3>
              ASEC Signs a Protocol with the Iraqi Group KAR for Manpower
              Technical Development.
            </h3>
            <span className="badge badge-info">Cairo, February 2019</span>
            <img
              className="img-fluid"
              src="https://i.imgur.com/AaZ7gSL.jpg"
              style={{ "margin-bottom": "15px", "margin-top": "15px" }}
            />
            <p>
              In continuation of its role in fostering the technical skills of
              the cement calibers across the region, ASEC Academy has entered
              into a protocol with the Iraqi conglomerate KAR Group for manpower
              technical development, at its subsidiary, Qarachog Cement plant,
              in Erbil, Iraq.
            </p>
            <p>
              The cooperation protocol aims at the technical development of
              domestic calibers of engineers, chemists, and technicians. This
              will be done through providing tailored programs, blending
              technological theory with best practices in cement manufacturing
              process and optimization. ASEC Academy will utilize both in-class
              and on-the-job training, in addition to simulator training for
              mill and kiln operators. A pool of the company’s experts and
              instructors from various specialties will support the development
              program, either through tutoring or supervising the onsite
              sessions.
            </p>
            <p>
              It is worth noting that ASEC Academy has been collaborating with
              the Iraqi cement companies since 2005.
            </p>
            <p>
              “We are committed to supporting our clients’ growth and assisting
              in developing manpower skills through quality training and
              knowledge sharing,” said ASEC’s Managing Director. “We are glad to
              resume our cooperation and support to the Iraqi cement industry
              and we look forward to furthering our partnership over the near
              future.”
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
