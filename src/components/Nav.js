import React from "react";
//import logo from '../img/ASECLogo.gif';
import { Link, NavLink } from "react-router-dom";
// we changed a tag to Link or NavLink to prevent reload the page, NavLink give us class of active in current page
const Nav = () => {
  return (
    <div>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="https://i.imgur.com/NoX7gvR.gif" style={{ width: 150 }} />
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company Profile
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/our-assets">
                    Our Assets
                  </NavLink>
                  <NavLink className="dropdown-item" to="/company-at-a-glance">
                    Company At A Glance
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/history-and-milestones"
                  >
                    Historty And Milestones
                  </NavLink>
                  <NavLink className="dropdown-item" to="/vision-and-mission">
                    Vision And Mission
                  </NavLink>
                  <NavLink className="dropdown-item" to="/our-team">
                    Our Team
                  </NavLink>
                  {/*<div className="dropdown-divider" />
                   <a className="dropdown-item" href="#">Something else here</a> 
                  <NavLink className="dropdown-item" to="/downloads">
                    Downloads
                  </NavLink>*/}
                </div>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/references">
                  References
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Media
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/media/news">
                    News
                  </NavLink>
                  <NavLink className="dropdown-item" to="/media/articles">
                    Articles
                  </NavLink>
                  <NavLink className="dropdown-item" to="/media/papers">
                    Papers
                  </NavLink>
                  <NavLink className="dropdown-item" to="/media/downloads">
                    Downloads
                  </NavLink>
                  <NavLink className="dropdown-item" to="/media/gallery">
                    Gallery
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
