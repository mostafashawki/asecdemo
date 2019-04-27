import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      {/* <div className="col-4"> */}
      <h2>
        <i className="fas fa-newspaper" /> News
      </h2>
      <ul>
        <li>
          <Link to="/news/kar">
            ASEC Signs a Protocol with the Iraqi Group KAR for Manpower
            Technical Development
          </Link>
        </li>
        <hr />

        <li>
          <Link to="/news/cemtech">
            ASEC Addresses Vibration Control at CEMTECH MEA 2019
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/news/bmic">
            Successful Commissioning of Coal Mill in BMIC, Egypt, under ASEC’s
            Consultancy.
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/news/amman-jordan">
            A Distinguished Presence for ASEC in the 23rd AICCE Held in Amman,
            Jordan.
          </Link>
        </li>
        <hr />
        {/* <li>
          <Link to="/news/alminya">
            ASEC and Alminya Cement Company continue cooperation for the 9 th
            year; the O&amp;M of Al-Minya Cement, Egypt till 2021
          </Link>
        </li>
        <hr /> */}

        {/* <li>
            <Link to="/news/taiheiyo-promac">
                ASEC Partners with TAIHEIYO ENGINEERING CORPORATION and PROMAC India to Provide End-to-end Solutions for Process Optimization and Energy Conversion.
            </Link>
            </li> */}
        {/* <hr/> */}
        {/* <li>
            <Link to="/news/mozambique">
                ASEC Engineering Signs Plant Management Agreement in Mozambique.
            </Link>
            </li> */}
      </ul>
      {/* </div> */}
    </div>
  );
};
export default SideBar;
