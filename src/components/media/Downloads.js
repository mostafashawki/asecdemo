import React from "react";
import SideBar from "../SideBar";

export default function Downloads() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>Downloads</h2>

            <ul>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://drive.google.com/open?id=14uugodvfMUOCFVnIbxdq9Lqqo1AaxMVM"
                >
                  <i className="far fa-file-pdf" /> ASEC Profile
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://drive.google.com/open?id=1SaJf8A7dzZgUO74dtXoBmPQBs7bcGO0t"
                >
                  <i className="far fa-file-pdf" /> ASEC Human Resources
                  Consultancy Services
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://drive.google.com/open?id=1f9G1NEwoTitsSx9p1f09ahAIMYf8wXvG"
                >
                  <i className="far fa-file-pdf" /> ASEC Academy
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://drive.google.com/open?id=1heM6gyG8UT3IFRY1YPE7yUuleS72Si1R"
                >
                  <i className="far fa-file-pdf" /> Articles and Case Studies
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
