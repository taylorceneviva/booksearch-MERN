import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid">
      <Link
        className="navbar-brand"
        style={{fontFamily: "Fjalla One, sans-serif"}}
        to="/"
      >
        Google Books Search
      </Link>
      <div className="col-6 container-fluid">
        <ul
          className="navbar-nav"
          style={{ fontFamily: "Montserrat, sans-serif"}}
        >
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/Search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Saved"
              className={
                window.location.pathname === "/Saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;