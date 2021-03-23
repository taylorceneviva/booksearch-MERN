import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid"
    style={{backgroundColor:"#F2E4DF"}}
    >
      <Link
        className="navbar-brand"
        to="/"
      >
        Google Book Search
      </Link>
      <div className="col-6 container-fluid">
        <ul
          className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Book Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={
                window.location.pathname === "/project"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;