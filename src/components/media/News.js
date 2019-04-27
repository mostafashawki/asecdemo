import React from "react";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <SideBar />
            <h2>News 2018</h2>
            <ul>
              <li>
                <Link to="/news/alminya">
                  ASEC and Alminya Cement Company continue cooperation for the 9
                  th year; the O&amp;M of Al-Minya Cement, Egypt till 2021
                </Link>
              </li>
              <hr />

              <li>
                <Link to="/news/taiheiyo-promac">
                  ASEC Partners with TAIHEIYO ENGINEERING CORPORATION and PROMAC
                  India to Provide End-to-end Solutions for Process Optimization
                  and Energy Conversion.
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/news/mozambique">
                  ASEC Engineering Signs Plant Management Agreement in
                  Mozambique.
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4">{/* <SideBar /> */}</div>
        </div>
      </div>
    </div>
  );
}
